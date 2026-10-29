---
title: "Scheduled jobs and loops"
description: "Prompts that run on a timer, sessions that keep working toward a goal, and being told when a run ends."
---

## Scheduled jobs

A scheduled job sends a prompt at a time you set. Each run opens a session of its own.

1. In the window, open Scheduled jobs and choose New job.
2. Give it a name and the prompt to send.
3. Pick when: at a time of day (weekdays only, if you like), or on an interval.
4. Pick the mode it runs in. Plan reads and searches only: nothing is written or run. See [Asking first and modes](/docs/app/permissions).
5. Save it. Run now runs it straight away.

You can also ask in the chat: "every morning at 9, check the deploy and tell me if it failed". Letronna can add, list and remove jobs, and asks you first. A job can also run once, at a date and time, and can stay quiet unless something changed.

Jobs run in whichever copy of Letronna is open, the window or the terminal, never twice. They keep working while the window is hidden in the tray. To run them with no window open, use:

```sh
letronna serve
```

A job can report to a chat app: switch on Report scheduled jobs here on the Messaging page. See [Telegram, Discord and Slack](/docs/chat-apps).

## Loops in one session

`/loop` sends a prompt again and again in this session: every so often, or at the model's own pace.

```sh
/loop 10m check CI
/loop stop
```

`/heartbeat` looks in on this session every so many minutes:

```sh
/heartbeat 30 check the deploy
```

## Working toward a goal

`/goal` keeps a session working until a goal is met: after each turn, a quick check decides whether to carry on. `/goal --check` adds a command to the goal; while that command fails, the goal is not met.

```sh
/goal all tests pass
/goal --check cargo test
/goal clear
```

`/goal` alone shows the goal. A goal that is blocked gets one more try, then pauses, as it does after twenty turns in a row; `/goal resume` carries on.

## Being told when it is done

`/notify` tells you when a reply ends or needs you while you are away. Turn it off with `/notify off`.

## In the background

In the window, `/bg` followed by a prompt runs it in the background, beside the chat. Commands still running at their time limit carry on as background jobs: `/jobs` lists them, and the Jobs tab shows them in the window.
