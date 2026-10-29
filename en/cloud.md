---
title: "Letronna Cloud"
description: "Run a task on Letronna's servers, keep a service running, or host a web app with its own link, all from the chat."
---

Letronna Cloud is the same Letronna agent, running on Letronna's servers instead of your computer. A task sent there keeps going when you close the app or the laptop, and what it builds can stay up: a web app gets its own link, and a service can keep running. It comes with [Pro](/dashboard/billing) and is paid from your credit.

## Running a task there

Just ask in the chat, in the window or the terminal: "run this in the cloud", or anything this computer cannot do well, such as a long build. Letronna asks before it sends a task, since it spends credit. The cloud sees nothing of your computer, so the task carries everything it needs, or an https git repository to clone.

- Each task runs in a container of its own, with the memory and time of its size: **light** 512 MB for 15 minutes, **normal** 1 GB for 30, **heavy** 2 GB for an hour.
- Its progress shows as it goes, and closing the app does not stop it; only Stop does.
- A conversation there keeps its folder and its history, so the next message carries on where the last one left off.
- What it made can be opened from a preview link in its answer.

From the terminal you can also send one straight away: `letronna cloud "task"`, with `--repo <url>`, `--tier light|normal|heavy` and `--thread <id>` to carry on.

## Services that stay online

Ask for something that must keep running, such as "watch my shop's stock every hour, email me when anything runs low, and **keep it running**". A scheduler, a webhook receiver or a chat bot all work the same way. Letronna builds and tests it, then leaves it running as a **worker**. Only say "keep it running" (or "keep it online") when you want that: anything else runs once and stops.

- A worker is restarted if it stops, and stopped for good after it crashes five times in ten minutes, saying why.
- It gets 256 MB unless it needs more (128 to 512 MB), and an account may keep three running.
- It is billed by the hour from your credit, and stopped if the credit runs out. A 128 MB service online all month costs about $0.75, a 256 MB one about $1.50.
- Keys it needs, such as an API token, go in `/work/.env` in its folder, not in its code.

## Web apps with a link

A web app Letronna builds there can stay up at its own address, `https://lc-<id>.letronna.si`. It wakes on the first visit, sleeps after ten minutes without one, and is awake at most eight hours a day. You only pay while it is awake.

## Looking after them

The [Cloud page](/dashboard/cloud) lists what you host, with what each printed last, Stop, Start and Restart, and what each has cost, and the tasks you sent with their own cost. Or ask in the chat ("how is my stock watcher doing?", "stop it"): Letronna reads them without asking and asks before it stops or starts one.

## What it costs

| What | Price |
|---|---|
| Compute (tasks, workers, awake apps) | about $6 per GB a month, charged by the second |
| The models a task uses | as any hosted request, on the [models page](/dashboard/models) |
| A 256 MB service online all month | about $1.50 |

Every charge is under Cloud on the [usage page](/dashboard/usage).

## What is not allowed

Mining, flooding other machines, and anything the [terms](/terms) forbid. An abuse guard watches every container: a miner or a flood is stopped at once, and the team is told of anything else that looks wrong. Only web traffic reaches the cloud, so game servers and other open ports are not possible yet.

## Your data there

A conversation's folder and what Letronna keeps for it stay on Letronna's servers while you use them, and are deleted after 14 days without use, unless a worker in it is still running. Support can read a task and its answer only if you allow it, and every look is logged.
