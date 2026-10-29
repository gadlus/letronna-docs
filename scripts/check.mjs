// node scripts/check.mjs — what every pull request must keep, checked on GitHub before it is merged.
// It needs nothing but Node. The rules are in CONTRIBUTING.md; this is them, enforced.
//   - sidebar.json names pages that exist in en/, each once, in groups every language names
//   - every page starts with a title and a description
//   - a translation is the English page in another language: the same headings, the same code blocks,
//     the same links and the same `code` spans, and nothing translated that is not in English yet
//   - every i18n/<lang>.json has exactly the keys of i18n/en.json, with the same {placeholders}
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

export const LANGS = ['en', 'zh', 'ja', 'ko', 'de', 'es', 'he', 'ar', 'ru'];
const problems = [];
const bad = (where, msg) => problems.push(`${where}: ${msg}`);

// Every .md under a folder, as paths without .md.
const pagesIn = (dir, at = '') => readdirSync(join(dir, at)).flatMap(name => {
  const rel = at ? `${at}/${name}` : name;
  if (statSync(join(dir, rel)).isDirectory()) return pagesIn(dir, rel);
  return name.endsWith('.md') ? [rel.slice(0, -3)] : [];
});

const read = file => {
  const raw = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const meta = {};
  if (m) for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) { const v = line.slice(i + 1).trim(); meta[line.slice(0, i).trim()] = v.startsWith('"') ? JSON.parse(v) : v; }
  }
  return { meta, body: m ? raw.slice(m[0].length) : raw, front: !!m };
};

// What a translation must keep from the English.
const shape = body => {
  const code = [...body.matchAll(/```[^\n]*\n([\s\S]*?)```/g)].map(m => m[1].trim());
  const prose = body.replace(/```[\s\S]*?```/g, '');
  return {
    headings: (prose.match(/^#{2,6} /gm) || []).map(h => h.trim()).join(' '),
    code: code.join('\n---\n'),
    links: [...prose.matchAll(/\]\(([^)]+)\)/g)].map(m => m[1]).sort().join(' '),
    spans: [...prose.matchAll(/`([^`\n]+)`/g)].map(m => m[1]).sort().join(' ')
  };
};

// sidebar.json: a tree of groups, each a list of paths or { page, pages }.
const sidebar = JSON.parse(readFileSync('sidebar.json', 'utf8'));
const listed = [];
const walk = (items, where) => {
  if (!Array.isArray(items)) return bad(where, 'must be a list');
  for (const item of items) {
    if (typeof item === 'string') { listed.push(item); continue; }
    if (!item || typeof item.page !== 'string' || !Array.isArray(item.pages)) { bad(where, `${JSON.stringify(item)} must be a path or { "page": ..., "pages": [...] }`); continue; }
    listed.push(item.page);
    walk(item.pages, `${where} > ${item.page}`);
  }
};
for (const g of sidebar) {
  if (!g.group) bad('sidebar.json', 'every group needs a "group" id');
  walk(g.pages, `sidebar.json ${g.group}`);
}
const english = pagesIn('en');
for (const p of listed) if (!english.includes(p)) bad('sidebar.json', `${p} has no en/${p}.md`);
for (const p of new Set(listed)) if (listed.filter(x => x === p).length > 1) bad('sidebar.json', `${p} is listed more than once`);
for (const p of english) if (!listed.includes(p)) bad(`en/${p}.md`, 'is not in sidebar.json, so nobody can reach it');

// The words around the pages.
const strings = l => JSON.parse(readFileSync(`i18n/${l}.json`, 'utf8'));
const en = strings('en');
const holes = s => (s.match(/\{\w+\}/g) || []).sort().join(' ');
for (const g of sidebar) if (!en.groups?.[g.group]) bad('i18n/en.json', `groups.${g.group} is missing`);

for (const dir of readdirSync('.').filter(d => statSync(d).isDirectory() && !d.startsWith('.') && !['i18n', 'scripts', 'node_modules'].includes(d))) {
  if (!LANGS.includes(dir)) bad(dir, `is not a language the site has (${LANGS.join(', ')})`);
}

for (const l of LANGS) {
  if (!existsSync(l)) continue;
  // the words around the pages: the same keys as the English
  if (!existsSync(`i18n/${l}.json`)) { bad(`i18n/${l}.json`, 'is missing'); continue; }
  const mine = strings(l);
  for (const part of ['groups', 'ui']) {
    for (const k of Object.keys(en[part])) {
      const t = mine[part]?.[k];
      if (typeof t !== 'string' || !t.trim()) bad(`i18n/${l}.json`, `${part}.${k} is missing`);
      else if (holes(t) !== holes(en[part][k])) bad(`i18n/${l}.json`, `${part}.${k} must keep ${holes(en[part][k]) || 'no'} placeholders`);
    }
    for (const k of Object.keys(mine[part] || {})) if (!(k in en[part])) bad(`i18n/${l}.json`, `${part}.${k} is not in the English`);
  }

  for (const p of pagesIn(l)) {
    const file = `${l}/${p}.md`, page = read(file);
    if (!page.front) { bad(file, 'must start with a --- block holding its title and description'); continue; }
    for (const k of ['title', 'description']) if (!page.meta[k]) bad(file, `has no ${k}`);
    if (l === 'en') continue;
    if (!english.includes(p)) { bad(file, `has no English page (en/${p}.md): write the English first`); continue; }
    // a translation keeps the shape of the English
    const a = shape(read(`en/${p}.md`).body), b = shape(page.body);
    if (a.headings !== b.headings) bad(file, 'its headings must match the English, the same number at the same levels');
    if (a.code !== b.code) bad(file, 'its code blocks must be exactly as in the English');
    if (a.links !== b.links) bad(file, 'its links must go where the English ones go');
    if (a.spans !== b.spans) bad(file, 'its `code` spans must be as in the English, untranslated');
  }
}

if (problems.length) {
  console.error(`${problems.length} problem(s):\n` + problems.map(p => '  ' + p).join('\n'));
  process.exit(1);
}
console.log(`docs ok: ${english.length} pages, ${LANGS.filter(l => existsSync(l)).length} languages`);
