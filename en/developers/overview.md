---
title: "Developers"
description: "Using Letronna from your own programs: scripts, editors and other agents."
---

Letronna runs on your computer, and your programs reach it through the `letronna` command. There are three ways in:

| You want to | Use | See |
|---|---|---|
| ask once from a script or a CI job, and read the answer | `letronna -p` | [Scripts and one-shot runs](/docs/terminal/scripts) |
| have an editor use Letronna as its agent | `letronna acp` | [Zed and JetBrains](/docs/plugins) |
| give another agent Letronna's browser, media and search tools | `letronna mcp serve` | [Letronna as an MCP server](/docs/mcp) |

[Building on Letronna](/docs/developers/building-on-letronna) says which to pick and what each one gives your program.

## Keys and the hosted models

There are no API keys to create for the hosted models. A program that uses Letronna through one of the commands above is paid from the credit of the account that computer is signed in to, at the prices on the [models page](/dashboard/models). See [Hosted models and credit](/docs/hosted-models).

To point Letronna at a server of your own instead, see [Gateways](/docs/gateways), or [Running with nothing set up](/docs/terminal/scripts) for a one-off run.
