---
title: "Services"
description: "Keep a bot, a scheduler or a webhook receiver running in Letronna Cloud, day and night."
---

A service (a **worker**) is a program Letronna leaves running in the cloud after a task: a Discord or Telegram bot, a scheduler, a webhook receiver. It keeps running with your computer off.

## Asking for one

Say what it should do, and say to keep it running:

> Watch my shop's stock every hour, email me when anything runs low, and keep it running.

Letronna builds it and tests it in the cloud, then leaves it running. Say "keep it running" or "keep it online" only when you want that: any other task runs once and stops.

## Keys it needs

A service often needs a key, such as a bot's token or an API key. Give it to Letronna in the chat; it goes in `/work/.env` in the service's folder, not in its code.

## How it keeps running

- If it stops, it is started again.
- If it crashes five times in ten minutes, it is stopped for good, with the reason. Read it in its output, fix it in the chat, and start it again.
- It gets 256 MB of memory unless it needs more, from 128 to 512 MB.
- An account may keep three running at once.
- It is billed by the hour from your credit, and stopped if the credit runs out. See [Costs](/docs/cloud/costs).

## Changing it

Ask in the chat, as you would for any change: "make the stock watcher check every half hour". Letronna changes it on the same thread, and the new code is what runs next.

## Checking on it, stopping it

Ask in the chat ("how is my stock watcher doing?", "stop it"), use the [Cloud page](/dashboard/cloud), or the terminal. See [Looking after them](/docs/cloud/managing).

A stopped service is not billed. Starting it again bills it again while it runs.
