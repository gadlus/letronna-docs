---
title: "Tasks in the cloud"
description: "Send a task to Letronna Cloud from the chat or the terminal, follow it, carry it on and stop it."
---

A task is one piece of work Letronna does on Letronna's servers and then brings the answer back. It needs [Pro](/dashboard/billing), and is paid from your credit: see [Costs](/docs/cloud/costs).

## When Letronna uses the cloud

Letronna picks where to build what you ask, in this order:

1. A page, chart, document or small app that one file can hold is written on your computer, for you to preview.
2. Anything else is built on your computer, in the project, with its own tools.
3. Only when your computer cannot, it goes to the cloud: a tool it needs is missing and cannot be installed, the work needs more memory or time than this machine has, or you asked for the cloud.

Letronna asks before each task it sends, since it spends credit, and says in its answer that the work ran in the cloud.

## Sending one from the chat

Ask in the window or the terminal: "run this in the cloud", or "build this in the cloud and tell me what failed".

The cloud sees nothing of your computer or of the conversation, so the task carries everything it needs. Letronna gives it one of these to work in:

- **Your project folder.** Letronna packs the folder and sends it: every file your `.gitignore` keeps, hidden ones such as `.env` included, but never `.git`. This works for a private repository, or one that is only on your computer.
- **A git repository**, cloned first. It must be a public `https` address: the cloud has no git sign-in.
- **Nothing**, for work that needs no files.

## Sending one from the terminal

```sh
letronna cloud "add a test for parse" --repo https://github.com/me/app
```

Letronna starts the task, prints each step as it goes, and then prints the answer. Options:

| Option | Does |
|---|---|
| `--repo <https-url>` | a git repository to work in, cloned first |
| `--branch <name>` | the branch to clone |
| `--tier <tier>` | `light` (512 MB), `normal` (1 GB) or `heavy` (2 GB); `light` unless set |
| `--model <name>` | a hosted model from the [models page](/dashboard/models); the cloud's default unless set |
| `--thread <id>` | carry on an earlier task's thread |
| `--no-wait` | start it, print its id and return |

## Sizes

Each task runs in a container of its own. Its size sets its memory and how long it may run:

| Tier | Memory | Longest run |
|---|---|---|
| light | 512 MB | 15 minutes |
| normal | 1 GB | 30 minutes |
| heavy | 2 GB | 1 hour |

Use `heavy` for big builds.

## Following it

Its progress shows as it goes: in the chat, the step under way; in the terminal, each step on its own line. Closing the app or the laptop does not stop it.

```sh
letronna cloud list
letronna cloud show run_abc123
```

`list` shows your twenty most recent tasks, with how each stands, its tier and how long it ran. `show` prints one task's answer, or how it stands. A task is queued, running, done, failed or stopped.

The [Cloud page](/dashboard/cloud) lists them too, with what each cost.

## Threads

Every task belongs to a thread: its folder and its conversation, kept on the server between tasks. To carry on where one left off, send the next task on the same thread:

```sh
letronna cloud "now make the tests pass" --thread <id>
```

The thread's id is printed under each answer. A thread unused for 14 days is deleted, unless a service in it is still running.

## What it made

When a task makes a page or a picture, its answer ends with a link: "See what it made". It is a private live link to the thread's folder, served as it is, for you alone. Nothing runs to serve it, so it costs nothing while nobody looks. To keep a web app running for others, see [Web apps](/docs/cloud/web-apps).

## Stopping it

```sh
letronna cloud stop run_abc123
```

Stop works on a task that is queued or running. Stop on the [Cloud page](/dashboard/cloud) does the same.

## Letting support read it

Support cannot read a task unless you allow it, one task at a time. Every look is logged.

```sh
letronna cloud support run_abc123 on
letronna cloud support run_abc123 off
```
