---
title: "Asking first and modes"
description: "When Letronna asks before it acts, the six modes, plan mode, and what is refused in every mode."
---

Letronna reads and searches on its own. Anything that changes your computer, such as writing a file or running a command, asks first: a card shows what it wants to do, and you allow or deny it. In the window, Enter allows and Escape denies. When one reply asks about several calls, the card says "2 of 3".

## The modes

The mode decides how much runs without asking. Each session keeps its own.

| Mode | Name in commands | What runs without asking |
|---|---|---|
| **Ask** | `default` | nothing that writes or runs; every change asks |
| **Edits** | `accept-edits` | edits inside the project; commands still ask |
| **Plan** | `plan` | reading and searching only; nothing is written or run |
| **Auto** | `auto` | edits inside the project; your own model judges the rest |
| **Don't ask** | `dont-ask` | only what you allowed before; whatever would ask is refused |
| **Bypass** | `bypass` | everything, except risky calls and your own rules |

Change it with the mode switch in the window, or in the terminal:

```sh
/mode accept-edits
```

In the terminal, Shift+Tab (or Alt+M) steps through Ask, Edits, Plan and Auto, and Bypass once you have chosen it. The footer says for a moment what each mode lets run. To start the terminal in a mode:

```sh
letronna --mode auto
```

`--plan` is the same as `--mode plan`, and `--yes` the same as `--mode bypass`. Use Bypass only where that is safe.

## Plan mode

Plan mode is for thinking before doing. Letronna reads, searches and makes a plan, and refuses any tool that would change something, however it is asked for. Turn it on and off with `/plan`; turning it off goes back to the mode you were in.

## Auto mode

In Auto, a judge running on your own model decides each call that would otherwise ask. Each call it let through or blocked is listed: `/decisions` in the terminal, or the Decisions list in the window. Auto allows installs inside the project and local git, but not a push nobody asked for.

On macOS and Linux, a command in Edits or Auto can also run confined by the system instead of asking: no network, and writes only inside the project.

## Allowed for this session

When you allow a call, you can allow it for the rest of the session too. Approvals given in one session stay in that session.

## Refused in every mode

Some things are refused whatever the mode:

- Catastrophic commands, such as deleting your home folder.
- A command that uploads a key file, with curl, wget, scp or rsync.
- Reading secret files, such as `.env` and private keys. `.env.example` is fine.

After Letronna has read text from outside, such as a web page, risky calls are checked again even in Bypass.

## Switching tools off

Any tool can be switched off, in Capabilities > Tools in the window. A tool that cannot work on your computer is not offered.
