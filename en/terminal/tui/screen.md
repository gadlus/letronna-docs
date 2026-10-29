---
title: "The screen"
description: "What the terminal shows, from the top of the window to the footer under the box."
---

Letronna takes the whole terminal window while it runs, as an editor does. When you leave, the window goes back to how it was, and Letronna says which session it was and how to come back to it.

From top to bottom, the window holds:

1. The conversation.
2. What is going on now: the waiting line, the plan, the goal, helpers at work and lines you have queued.
3. The box you type in.
4. The footer.

The box stays at the foot of the window however far back you scroll.

## The opening screen

A new or resumed session opens with Letronna's name and version, then:

| Line | Says |
|---|---|
| project | the folder the session works in |
| model | the model it asks |
| gateway | where that model is |
| session | `new`, or how many messages it is carrying on from |
| mode | the mode, and what it lets run |

Under them are two hints: `type / for commands`, and the keys that start a new line in your terminal. In a narrow window the logo is left out and the details stand alone.

A session picked up with `--continue`, `--resume` or `/resume` shows its conversation at once, up to its last thousand messages.

## The conversation

What you send starts with `›`. Letronna's replies start with `●`, and their wrapped lines keep the same column.

Replies are drawn as they stream in:

- `**bold**` shows bold, and `` `code` `` shows as code.
- A heading shows bold, without its `#` marks.
- A fenced code block loses its fences, names its language dimly over it, and is coloured as code.

## Tool calls

Each tool call takes two lines: what ran and on what, then how it went. Its output goes under them.

A tool's output shows its first twelve rows, and the rest is folded under them. Ctrl+O, or a click on it, shows all of it; the same again folds it.

An edit that goes ahead without asking shows its diff after it, as one that asks shows it before. See [Approving tool calls](/docs/terminal/tui/approvals).

## Thinking

When `/thinking` is on, the model's thinking shows a few lines at a time while it comes in, then folds to one line. Ctrl+O opens the latest thinking, or a click opens the one you click on.

## Over the box

These show over the box only while they apply:

- **The waiting line**: a turning mark and a word such as "Thinking", with how long the turn has taken. Waiting on a tool, it names the tool. After 30 seconds it says "longer than usual"; after two minutes it turns red and says Esc stops it.
- **The plan**: the model's checklist, with a count, while any of it is left to do. Up to five steps show at once.
- **The goal**: the session's goal on one line, while it has one. See `/goal` in [Every slash command](/docs/terminal/slash-commands).
- **Helpers and workflow runs**: a line for each at work, with what it was given, its tokens and its time. Past four, the rest share a line.
- **Queued lines**: what you sent while Letronna works, waiting to go in. See [Typing while it works](#typing-while-it-works).

## The box

The box grows to eight rows as you type, then scrolls inside itself. The caret stays where you type, and ↑ and ↓ move between wrapped rows before they step through what you sent before.

Its top edge names the session and says where the folder stands in git: the branch, what is changed, and how far it is from its upstream. In a narrow window the name comes first and the git part is dropped.

Its bottom edge says how full the session's context is, once there is a reply:

| Context used | The edge |
|---|---|
| under 70% | dim |
| from 70% | amber |
| from 85% | adds `/compact` |
| from 90% | red |

`/context` shows what fills it. See [Sessions](/docs/app/sessions).

Typing `/` opens a menu of commands under the box, narrowed as you type; ↑ and ↓ move in it, and Tab or Enter takes one. Typing `@` and a path, then Tab, completes the path in the project folder.

## The footer

The footer leads with the mode: a mark and a few words, such as `⏵ asks first`, then `shift+tab to switch`. After them come the model, the gateway, and the effort, `web` and `voice` where they are on.

The footer changes with what you are doing:

| When | It says |
|---|---|
| a reply is running | `esc to stop`, then how long the turn has taken |
| helpers are at work | how many, and `/agents to steer or stop` |
| you have scrolled back | how many lines, and `end to follow again` |
| a line starts with `!` | which folder it runs in, without asking |
| you type a command's words | what that command does |
| a list or a question is open | the keys that answer it |

Most notes in the footer, such as "copied", go at the next key.

## Typing while it works

You can type and send while Letronna works. A line sent then waits over the box, shown as queued, and reaches the model at the reply's next step.

| Key | Does |
|---|---|
| ↑ on an empty box | take the newest queued line back to change it |
| Ctrl+S | send what is queued now, without waiting for the reply to finish |
| Esc | stop the reply; queued lines go back into the box |

A slash command or a `!` line typed while it works waits for the turn to end, then runs.

## Leaving

`/exit`, Ctrl+D, or Ctrl+C twice on an empty box. Closing the terminal ends the session the same way. Every key is in [Keys in the terminal](/docs/terminal/keys).
