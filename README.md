# Letronna docs

The guide at [letronna.ai/docs](https://letronna.ai/docs), in nine languages. Anyone can fix a page, add one or translate one.

- Pages are Markdown files: `en/` is the English, and each language has its own folder.
- `sidebar.json` sets the groups and the order. Pages can sit under other pages.
- `i18n/<lang>.json` holds the words around the pages, such as group names and the search box.

When a change is merged into `main`, letronna.ai is rebuilt with it.

**To contribute,** read [CONTRIBUTING.md](CONTRIBUTING.md) and run `node scripts/check.mjs` before you open a pull request.

The text is published under [CC BY 4.0](LICENSE).
