---
title: "Building on Letronna"
description: "Which way into Letronna fits your program, and what each one gives it."
---

Each way in is a process your program starts and talks to on stdin and stdout. Letronna's approvals, rules and hooks apply to all of them, as they do in the terminal.

## Pick one

- **Your program wants an answer.** Use `letronna -p`. It runs one task in the project folder and prints the result, as text or JSON.
- **Your program is an editor.** Use `letronna acp`. The editor shows the turn as it runs and answers the approvals itself.
- **Your program is another agent.** Use `letronna mcp serve`. It keeps its own model and loop, and calls Letronna's tools when it needs them.

## From a script

`letronna -p` never stops to ask, so choose a mode that allows what the task needs. For an answer your program can parse, ask for JSON:

```sh
letronna -p --output json "how many files are in this folder?"
```

To get the answer itself in a shape you choose, give it a JSON Schema. The answer is printed alone, or as `value` with `--output json`:

```sh
letronna -p --json-schema schema.json "list the TODOs in src"
```

To keep one run going and send it more messages, use `--input-format stream-json`. Every option is on [Scripts and one-shot runs](/docs/terminal/scripts).

## From an editor

The editor starts this command and speaks the Agent Client Protocol to it:

```sh
letronna acp
```

Each prompt runs as an ordinary Letronna session, in the same list as the others. A call that needs a yes goes to the editor with the terminal's answers: once, always in this session, or no. Every mode but Auto is offered. See [Zed and JetBrains](/docs/plugins).

## From another agent

Add this command to the other agent as an MCP server:

```sh
letronna mcp serve
```

It offers these tools:

| Tool | Does |
|---|---|
| `web_fetch` | reads a web page |
| `browse`, `use_page` | open and work a page in Letronna's browser |
| `search_web` | searches the web |
| `make_image`, `speak`, `transcribe`, `make_video` | make and read media on the hosted models |

Calls are answered one at a time, in order; start a second server to run more at once. A tool that needs a yes is refused unless the server was started with `--yes`, and your deny and ask rules still refuse with it. `--allow-turn` adds `letronna_turn`, which runs a whole Letronna turn on a prompt and returns its answer.

The media tools spend your credit: see [Hosted models and credit](/docs/hosted-models).
