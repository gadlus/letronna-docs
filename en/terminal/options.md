---
title: "Commands and options"
description: "Everything letronna takes on the command line: its commands and its options."
---

`letronna --help` prints this list too.

## Commands

| Command | Does |
|---|---|
| `letronna` | open a conversation |
| `letronna -p "question"` | ask once, print the answer and exit; see [Scripts and one-shot runs](/docs/terminal/scripts) |
| `letronna gui` | open the window instead |
| `letronna serve` | answer chat apps and run scheduled jobs, with no window |
| `letronna setup` | name, sign in, provider, model, install |
| `letronna doctor` | check the setup, the disk and the gateway |
| `letronna cloud` | run a task on Letronna's servers (Pro); see [Letronna Cloud](/docs/cloud) |
| `letronna wallet` | the wallet the agent pays from, and its limits; see [Wallet](/docs/wallet) |
| `letronna mcp` | add, list, get or remove MCP servers; see [MCP servers](/docs/mcp) |
| `letronna mcp serve` | offer the browser, media and search tools to another agent over MCP |
| `letronna acp` | serve an editor over the Agent Client Protocol |
| `letronna --uninstall` | take it off again |

## Options

| Option | Does |
|---|---|
| `-c`, `--continue` | resume this folder's most recent session |
| `-r`, `--resume [id]` | choose a session, or open the one with this id (the id `/where` shows) |
| `--worktree` | work in a git worktree of its own, on a branch made from HEAD, leaving your checkout alone |
| `--mode <mode>` | how much runs without asking: `default`, `accept-edits`, `plan`, `auto`, `dont-ask` or `bypass` |
| `--yes` | the same as `--mode bypass`: run tools without asking, except risky ones |
| `--plan` | the same as `--mode plan`: read and search only |
| `--model <id>` | this session's model, leaving the default as it is |
| `--gateway <name>` | the gateway that model is on |
| `--effort <level>` | how hard it thinks in this session, or `auto` |
| `--memory <when>` | when this session saves to memory: `when-asked`, `ask` or `auto` |
| `--memory-scope <where>` | where it keeps memory: `auto` (everywhere), `project` or `chat` |
| `--private` | a new private chat: only its own notes load, and it saves only when asked |
| `--offline` | with `doctor`: leave the network alone |
| `-h`, `--help` | the list of commands and options |
| `-V`, `--version` | which version this is |

The modes are explained in [Asking first and modes](/docs/app/permissions), and memory in [Memory](/docs/app/memory).

## Examples

```sh
letronna --mode accept-edits --worktree
letronna -r 16
letronna doctor --offline
```

With no mode option, the terminal starts in the mode the window starts sessions in.
