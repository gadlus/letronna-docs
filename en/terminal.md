---
title: "The terminal"
description: "letronna in a terminal: how to start it, its options, and every slash command."
---

The same agent, in a terminal, with the same account, sessions and settings as the app.

## Starting it

| Command | Does |
|---|---|
| `letronna` | open a conversation |
| `letronna -p "question"` | ask once, print the answer and exit |
| `letronna --continue` | pick up the most recent session |
| `letronna --resume` | choose from the recent sessions; with an id, open that one |
| `letronna gui` | open the window instead |
| `letronna setup` | name, sign in, provider, model, install |
| `letronna --uninstall` | take it off again |

`--plan` starts in plan mode: read and search only, never write or run. `--yes` runs tools without asking first — use it only where that is safe.

## Slash commands

Type `/` in a conversation to see these:

| Command | Does |
|---|---|
| `/help` | what Letronna can do here |
| `/new` | start a fresh session |
| `/plan` | read and search only, never write or run |
| `/model` | show or change the model; add image, speech or video for those |
| `/gateways` | see, add or remove gateways |
| `/team` | bill hosted models to a team or to yourself |
| `/login` | sign in to Letronna |
| `/logout` | sign out on this machine |
| `/whoami` | who is signed in |
| `/effort` | how hard the model should think |
| `/thinking` | show the model's thinking, or hide it |
| `/search` | let the model search the web |
| `/jobs` | commands still running in the background |
| `/skills` | saved instructions you can hand the model |
| `/resume` | pick up a session from before |
| `/where` | show the project folder and session file |
| `/clear` | clear the screen |
| `/exit` | leave |
