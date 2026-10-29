# Contributing

Thank you for helping. A one-word fix is as welcome as a new guide.

Every pull request runs `scripts/check.mjs`, and a maintainer reads it before it is merged. Run the check yourself first:

```sh
node scripts/check.mjs
```

It needs only Node 22 or later.

## How the repo is laid out

| Path | Holds |
|---|---|
| `en/` | the English pages, the source for every language |
| `zh/` `ja/` `ko/` `de/` `es/` `he/` `ar/` `ru/` | the same pages, translated |
| `sidebar.json` | the groups and the order of the pages |
| `i18n/<lang>.json` | the words around the pages: group names, the search box, "Next", and so on |
| `scripts/check.mjs` | the rules below, checked |

A page's address is its path: `en/gateways.md` is letronna.ai/docs/gateways, and `de/gateways.md` is letronna.ai/de/docs/gateways.

## Fix a page

1. Click **Edit this page on GitHub** at the foot of the page on letronna.ai, or find its file.
2. Make the change and open a pull request.

If you change an English page, the translations may now say something different. Say so in the pull request; you don't have to translate it yourself.

## Add a page

1. Write it in English first, under `en/`. Start it with its title and a one-line description:

   ```md
   ---
   title: "Gateways"
   description: "Where Letronna gets its models."
   ---
   ```

2. Add its path, without `.md`, to `sidebar.json`, in the group it belongs to.
3. To put it under another page, write that page as `{ "page": "using/gateways", "pages": ["using/gateways/ollama"] }`. Pages can go as deep as you need, but two levels is usually enough.
4. A new group needs an id in `sidebar.json` and its name in every `i18n/<lang>.json`.

Until a language translates a new page, readers of that language see the English page with a note saying so.

## Translate a page

1. Copy the English file to the same path in the language's folder: `en/teams.md` becomes `ja/teams.md`.
2. Translate the title, the description and the text.
3. Keep these exactly as the English has them. The check fails otherwise:
   - **Headings:** the same number of them, at the same levels (`##`, `###`).
   - **Code blocks:** word for word. Commands and file names do not change.
   - **`code` spans:** untranslated.
   - **Links:** to the same places. Write `/docs/teams`, not `/ja/docs/teams`; the site sends readers to their own language.
   - **Product names:** Letronna, LETRO, OpenAI, OpenRouter, Ollama, GitHub, and the names of plans and models.
   - **Numbers and prices.**
4. To translate the words around the pages, edit `i18n/<lang>.json`. Keep every key, and keep `{placeholders}` such as `{title}` as they are.

### Languages

Use the words in [GLOSSARY.md](GLOSSARY.md) for Letronna's terms, and its notes on tone for your language.

| Folder | Language | Notes |
|---|---|---|
| `en` | English | the source |
| `zh` | Simplified Chinese | full-width punctuation |
| `ja` | Japanese | です／ます style |
| `ko` | Korean | 합니다 style |
| `de` | German | informal "du" |
| `es` | Spanish | informal "tú", neutral wording, no "vosotros" |
| `he` | Hebrew | right to left, gender-neutral plural |
| `ar` | Arabic | right to left, Modern Standard Arabic |
| `ru` | Russian | formal "вы" |

To add a language, open an issue first: the site has to learn it too.

## How to write

- **Plain words, short sentences.** Write for someone who has never used Letronna.
- **Say what the reader does, in the order they do it.** Number the steps when the order matters.
- **Every command goes in a code block,** ready to copy.
- **Say what Letronna does today,** not what is planned. The roadmap is at letronna.ai/roadmap.
- **One subject per page.** If a page grows past a few screens, split it and put the parts under it.
- **Link, don't repeat.** If another page explains it, link there.
- **Name things as the app does:** the same menu names, button names and commands.
- **No marketing:** no "powerful", "seamless" or "simply". Show what it does.

## What is not accepted

- Pages about other products, or comparisons with them.
- Keys, tokens, passwords or anything private, even as examples. Use `sk-...` for a key.
- Text copied from somewhere else that you don't have the right to share.
- Changes made by a tool that the author has not read.

## License

By contributing, you agree that your text is published under [CC BY 4.0](LICENSE).
