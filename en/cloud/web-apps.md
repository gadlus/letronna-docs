---
title: "Web apps with a link"
description: "A web app Letronna builds in the cloud stays up at its own address, wakes on a visit and sleeps when nobody comes."
---

A web app Letronna builds in Letronna Cloud can stay up at an address of its own, for anyone with the link. Any server works: a Next.js site, a Rust API, anything that answers on a port.

## Asking for one

Ask for the app and say to keep it up: "build a booking page for my studio and keep it online". Letronna builds it and tests it in the cloud, then gives you its address:

```
https://lc-<id>.letronna.si
```

## Awake and asleep

- An app wakes on the first visit. That visit waits while it starts.
- It sleeps after ten minutes without a visit.
- It may be awake eight hours a day. Past that, a visitor is told it wakes again tomorrow.
- You pay only while it is awake, by the second. See [Costs](/docs/cloud/costs).
- Awake, it gets 512 MB unless it needs more, from 256 MB to 2 GB.

Its folder stays while it sleeps, so it wakes as it was. An app can stream to its visitors (server-sent events) for as long as they stay.

## A live link is not a web app

A task that makes a page gives a private live link to it ("See what it made"): the thread's files, served as they are, for you alone, with nothing running. A web app is a program that runs, at a public address. See [Tasks](/docs/cloud/tasks).

## What a web app cannot do yet

Only web traffic reaches the cloud: an app answers on its address over HTTPS, and other ports are not open. The address is always on `letronna.si`.

## Looking after it

The [Cloud page](/dashboard/cloud) shows each app with its address, its state (Running, Starting, Asleep until visited, Stopped), what it printed and what it cost. See [Looking after them](/docs/cloud/managing).
