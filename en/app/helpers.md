---
title: "Helpers and workflows"
description: "Letronna handing parts of a task to helpers, running workflows of many helpers, and working in a git worktree."
---

## Helpers

On a bigger task, Letronna can hand parts of the work to helpers: other agents that work side by side for the session.

- They share the session's task list, with who owns each item and what blocks it.
- They go through the same approvals as the session, in its mode and with its rules.
- They share one token budget across all of them.
- A helper can work in a git worktree of its own, so it does not touch your checkout.
- A kept helper waits for more work and wakes when it gets a message.

To see them at work:

- In the window, open Activity: what each helper is doing, with a way to read, steer or stop it. Its approvals come to you as usual.
- In the terminal, `/agents` lists the helpers working for this session; stop one or tell it something.

Helpers' conversations are kept beside their session, out of the session list.

## Workflows

A workflow is a script that runs many helpers for a big task. Letronna can write one and run it once you approve it: the card shows the script first.

- `/crew` lets Letronna run workflows of helpers for big tasks. Start a message with `@crew` to allow it for that message alone.
- `/workflows` lists workflow runs: look in, pause, stop, resume, skip or retry them. In the window, the Workflows page does the same, and shows one helper's conversation or a run's log.
- A finished part of a run is not done again when the run is resumed.
- A saved workflow runs as a slash command. `/review`, which looks over a change, comes built in.

## Working in a worktree

To start a terminal session in a git worktree of its own, on a new branch made from where you are, leaving your checkout alone:

```sh
letronna --worktree
```

When it is done, its work can be applied back.
