---
title: "Looking after them"
description: "See what your services and web apps print, and take them down or bring them back, from the chat or the terminal."
---

What you host in Letronna Cloud can be looked after three ways: in the chat, on the [Cloud page](/dashboard/cloud) (see [The dashboard](/docs/dashboard)), or in the terminal.

## In the chat

Ask: "how is my stock watcher doing?", "what did the bot print last?", "stop it", "start it again". Letronna reads what is running without asking, and asks before it takes anything down or brings it back.

## In the terminal

```sh
letronna cloud apps
```

lists what your tasks left running: each one's thread, whether it is an `app` or a `worker`, its state (running, asleep, starting or stopped), its memory and its address. If one stopped on a failure, the reason is under it.

```sh
letronna cloud logs <thread>
```

prints what it printed last, and why it stopped if it did.

```sh
letronna cloud down <thread>
letronna cloud up <thread>
```

`down` takes a service down, or puts a web app to sleep. `up` brings a stopped service back; it is billed again while it runs. A web app needs no `up`: it wakes on its next visit.

The thread comes from `letronna cloud apps`.
