# Letronna docs

The guide at [letronna.ai/docs](https://letronna.ai/docs). Anyone can fix a page or add one.

## How it is laid out

- `en/`, `de/`, `ja/` and the other language folders hold one Markdown file per page.
- `sidebar.json` sets the groups and the order of pages. A page with pages under it is written `{ "page": "path", "pages": [ ... ] }`, as deep as you need.
- Each page starts with its title and a one-line description:

  ```md
  ---
  title: "Gateways"
  description: "Where Letronna gets its models."
  ---
  ```

English is the source. A page that a language has not translated yet shows in English.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The text is [CC BY 4.0](LICENSE).
