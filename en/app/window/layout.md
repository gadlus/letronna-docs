---
title: "The parts of the window"
description: "What is where in the Letronna window: the top bar, the sidebar, the chat, the composer, the status bar and the panel."
---

The window has six parts. F6 moves the keys from one part to the next, and Shift+F6 goes back. See [Keyboard shortcuts](/docs/app/window/shortcuts).

## The top bar

From left to right:

| Part | Does |
|---|---|
| **Toggle sidebar** | shows or hides the sessions on the left |
| **Search or run a command** | opens the [command palette](/docs/app/window/palette) |
| **Toggle right panel** | shows or hides the panel on the right |
| your name, or **Guest** | the account menu: **Account**, **Usage**, **Settings**, **Set up Letronna**, **Guide**, and **Sign out** or **Sign in** |

## The sidebar

**New session** is at the top, then your sessions, then the window's pages: **Capabilities**, **Activity**, **Plugins**, **Messaging**, **Artifacts**, **Scheduled jobs**, **Wallet** and **Workflows**.

The session list can show only some sessions:

| Filter | Shows |
|---|---|
| **Needs you** | sessions waiting on a card or a question |
| **Working** | sessions with a reply running |
| **Unseen** | sessions that finished while you looked elsewhere |
| **Pinned** | pinned sessions |

**Group by project** puts the sessions under their project folders. A session's menu has **Rename**, **Name it again**, **Pin** or **Unpin**, **Decisions**, **Export as Markdown**, **Import a session** and **Delete**. See [Sessions](/docs/app/sessions).

## The chat

Your messages and the replies, with every tool call the agent makes. A tool call, a thought or a folded run opens with a click, or with Enter or Space.

Each message has a menu, with **More** for the rest:

| Item | Does |
|---|---|
| **Copy** | copies it |
| **Edit** | on your own message: change it and send it again |
| **Retry**, **Retry in a fork** | asks it again, here or in a copy of the session |
| **Rewind to here** | goes back to it; see [Sessions](/docs/app/sessions) |
| **Fork from here** | carries on in a copy of the session |
| **Summarize up to here** | summarises what came before it |

Under a reply, the files that turn changed are listed. **Review** opens them in the Changes tab, and **Undo these** puts them back as they were before the turn.

## The composer

The box you write in. Enter sends. Shift+Enter starts a new line. While a reply runs, Enter sends once the current step is done, and Ctrl+Enter sends at once, into the reply.

Around the box:

| Control | Does |
|---|---|
| **+** | adds **Files**, a **Project folder**, **Images**, or a **Prompt snippet** (a Goal, Context, Constraints, Deliverable outline) |
| the mode | shows the session's mode; click to change it. Its menu also has **Decisions**, the calls Auto let through or blocked. See [Asking first and modes](/docs/app/permissions) |
| the model | the model menu: **Text** models first, with tabs for other kinds where a gateway has them, and **All** to see every gateway |
| **Web** | lets the model search the web inside its reply, where the model can |
| **Crew** | lets Letronna run [helpers](/docs/app/helpers) for this message |
| the microphone | [voice input](/docs/app/window/voice) |
| **Send**, or **Stop** | sends, or stops the reply |

Type `/` for commands and `@` for files. Typing anywhere outside a text box writes in the composer.

When another session needs you, a line over the composer says so, with **Open it**. While something runs in the session, a strip over the composer lists it; Ctrl+Shift+T opens it.

## The status bar

At the foot of the window:

- **The project folder.** Click it to **Attach a project folder**, **Open folder…** or pick one under **Recent**. With none, it says **No project**.
- **See changes** opens the Changes tab.
- **What fills the context**: how full the model's window is. Click it for the parts: **System**, **Tools**, **MCP**, **Memory**, **Skills** and **Conversation**.
- **See what is running**: what runs now, such as a loop. Click one to stop it.

## The panel

The panel on the right has three tabs. See [The side panel](/docs/app/window/panel).
