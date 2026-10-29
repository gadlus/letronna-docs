---
title: "Limits"
description: "How much Letronna Cloud runs at once, how big and how long, and what it does not allow."
---

## Tasks

| Limit | Value |
|---|---|
| Tasks running at once | 3, of them 1 heavy |
| Memory and longest run | light 512 MB for 15 minutes, normal 1 GB for 30, heavy 2 GB for an hour |
| A task's text | 20,000 characters |
| A project folder sent with it | 25 MB, packed |
| A git repository | public, over `https` |

A task past these waits in the queue until there is room, or is refused with the reason.

## Services

| Limit | Value |
|---|---|
| Running at once | 3 per account |
| Memory | 256 MB unless it needs more, from 128 to 512 MB |
| Crashes | stopped for good after 5 in 10 minutes |

## Web apps

| Limit | Value |
|---|---|
| Asleep after | 10 minutes without a visit |
| Awake | at most 8 hours a day |
| Memory awake | 512 MB unless it needs more, from 256 MB to 2 GB |
| A request to it | 25 MB |
| Ports | web traffic only, at its `letronna.si` address |

## Live links and terminals

| Limit | Value |
|---|---|
| A file a live link serves | 20 MB |
| Terminals open at once | 2 |
| A terminal stays open | 2 hours, closed after 15 minutes without a key |

## Threads

A thread's folder and history are deleted after 14 days without use, unless a service in it is still running. See [Data and privacy](/docs/data-and-privacy).

## What is not allowed

Mining, flooding other machines, and anything the [terms](/terms) forbid. Every container is watched: a miner or a flood is stopped at once, and the team is told of anything else that looks wrong.
