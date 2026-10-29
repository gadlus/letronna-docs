---
title: "Every slash command"
description: "All of the terminal's slash commands, grouped by what they do."
---

Type `/` in a conversation to see these, narrowed as you type. `/help <command>` says more about one. Skills, MCP prompts and your own commands are offered as you type their names too.

## Sessions

| Command | Does |
|---|---|
| `/new` | start a fresh session |
| `/resume` | pick up a session; a word finds it by title or by what was said |
| `/rename` | name this session, or have a model name it |
| `/branch` | carry on in a copy of this session |
| `/rewind` | go back to any message: restore the chat, the code, or both |
| `/undo` | the same as `/rewind` |
| `/retry` | ask your last message again |
| `/compact` | summarise earlier turns now; a number keeps that many last turns |
| `/context` | what fills the context, part by part, and how full it is |
| `/btw` | ask something aside; the answer is not kept |
| `/copy` | copy the last reply as written; `/copy 2` the one before it |
| `/export` | write the conversation as Markdown: `/export [file]` |
| `/status` | version, session, folder, model, mode, account and context |
| `/diff` | what changed in the project; `/diff session` for this session's files |
| `/where` | show the project folder and session file |
| `/import` | continue a session from Claude Code or Codex |
| `/retention` | delete sessions older than a number of days, or `off` to keep them |
| `/clear` | start fresh in a new session; the last one stays in `/resume` |

## Model

| Command | Does |
|---|---|
| `/model` | show or change the model; add `image`, `speech` or `video` for those, `side` for summaries, or `names` for session names |
| `/effort` | how hard the model should think |
| `/thinking` | show the model's thinking, or hide it |
| `/style` | list reply styles, or pick one: `/style concise` |
| `/fallback` | models to carry on with when yours is overloaded or out of credit |
| `/voice` | read replies aloud as they stream, paid from your credit |

## Modes

| Command | Does |
|---|---|
| `/mode` | show or change how much runs without asking |
| `/plan` | read and search only, never change files; `/plan on` or `off` |
| `/decisions` | what auto mode's judge let run or blocked in this session |
| `/verify` | ask the model to build or test after it changes files, or not |

## Tools

| Command | Does |
|---|---|
| `/search` | let the model search the web; `/search services` for your own, `/search keyless` for DuckDuckGo |
| `/image` | attach a picture to your next message: `/image <path>` |
| `/preview` | serve an HTML or SVG file to your browser: `/preview [--open] <path>` |
| `/skills` | skills: use one, switch them on or off, add from GitHub |
| `/mcp` | MCP servers and their prompts |
| `/plugins` | plugins: add from git, switch on or off, allow servers, update, remove |
| `/init` | have the model write or fill in the project's `AGENTS.md` |

## Memory

| Command | Does |
|---|---|
| `/memory` | what is kept between sessions; `/memory edit`, `log` or `restore` |
| `/remember` | when this chat saves memory and where; `/remember <text>` keeps that |
| `/memory-review` | look back now and then for what to remember, or stop; only while saving on its own |

## Background work

| Command | Does |
|---|---|
| `/jobs` | commands still running in the background |
| `/loop` | run a prompt every so often, or at the model's pace; `/loop stop` ends it |
| `/heartbeat` | look in on this session every so many minutes |
| `/goal` | keep working until a goal is met: `/goal <text>`, `--check <command>`, `resume`, `clear` |
| `/agents` | helpers working for this session; stop one or tell it something |
| `/workflows` | workflow runs: look in, pause, stop, resume, skip or retry |
| `/crew` | let Letronna run workflows of helpers for big tasks |
| `/notify` | say when a reply ends or needs you while you are away, or stop |

## Account

| Command | Does |
|---|---|
| `/connect` | connect or sign in to providers, add gateways of your own, see plan and usage |
| `/team` | bill hosted models to a team or to yourself |
| `/login` | sign in to Letronna |
| `/logout` | sign out on this machine |
| `/whoami` | who is signed in |
| `/wallet` | the wallet the agent pays from: balances, limits, x402, networks, history |
| `/usage` | tokens and cost: this session, by day and by model |
| `/insights` | the last weeks by day and hour, top tools and models: `/insights 8` |

## Help and leaving

| Command | Does |
|---|---|
| `/help` | what Letronna can do here |
| `/exit` | leave |

To send a message that starts with a slash as words, start it with `//`.
