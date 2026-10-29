---
title: "Sessions"
description: "Finding, resuming, rewinding, branching, summarising and exporting conversations."
---

Each conversation is a session, kept as its own file in your [data folder](/docs/data-and-privacy). The window and the terminal share them: start one in the window and carry on in the terminal.

## Finding a session

- In the window, sessions are listed on the left, with pinning, date groups and filters. Search finds words in any order. Ctrl+Tab switches between recent sessions, and Ctrl+K opens a palette that finds sessions too.
- In the terminal, `/resume` lists the recent sessions; a word after it finds one by its title or by what was said.

```sh
letronna --continue
letronna --resume
```

The first picks up this folder's most recent session; the second lets you choose. `/where` shows the session's file.

## Names

A session is named by a model once its first reply is in. A name you give it yourself is never replaced.

- In the terminal, `/rename` names it, or with nothing after it asks for a new name now. `/model names` picks the model that names sessions, or turns naming off.
- In the window, Name it again is in a session's menu, and Settings > Model > Session names switches naming off or picks the model.

## Going back

- **Rewind**: go back to any message you sent. Letronna asks whether to restore the code and the conversation, the conversation alone, or the code alone. In the window, use Rewind to here on a message, or press Escape twice in an empty box. In the terminal, use `/rewind` (or `/undo`), or press Esc twice on an empty box.
- **Retry**: `/retry` asks your last message again.
- **Branch**: `/branch` carries on in a copy of the session, leaving the first as it was. In the window, use Fork from here on a message.

Rewinding also puts back what a command changed in the project.

## When a conversation gets long

When a conversation outgrows the model's window, older turns are summarised instead of forgotten. You can summarise now, too:

```sh
/compact
/compact 3
```

The second keeps the last three turns word for word. `/context` shows what fills the context, part by part. The terminal's box and the window's status bar say how full it is.

## Asking aside

`/btw` asks something aside without derailing the conversation. The answer is not kept.

## Exporting and copying

- `/export` writes the conversation as Markdown, to a file in the project named after the session, or to the file you name.
- `/copy` copies the last reply as written; `/copy 2` the one before it.

## Bringing in other sessions

Continue a session from Claude Code or Codex, in the window or the terminal:

```sh
/import
```

## Deleting old sessions

Sessions are kept until you delete them. To delete those untouched for 30 days:

```sh
/retention 30
```

`/retention off` keeps them all again.

## Usage

`/usage` adds up tokens and cost for this session, by day and by model. `/insights` shows the last weeks by day and hour, with the top tools and models.
