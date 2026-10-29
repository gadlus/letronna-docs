---
title: "Telegram, Discord and Slack"
description: "Talking to Letronna from a chat app on your phone, and getting scheduled jobs' reports there."
---

Letronna can answer you from Telegram, Discord or Slack: send a message, get a reply. Set each one up in the window, on the Messaging page. Keys and tokens are kept on your computer.

In a chat app:

- Replies come whole and formatted.
- Files, photos and voice notes go both ways.
- A call that needs your yes comes with Allow and Deny buttons, once you switch on Let messages use tools. Off, a message can read and search but not write or run anything.
- Scheduled jobs can report there: switch on Report scheduled jobs here. See [Scheduled jobs and loops](/docs/app/scheduled-jobs).

## Telegram

1. On the Messaging page, open Telegram and choose Open @BotFather. Make a bot there and copy the token it gives you.
2. Paste it as the Bot token, and save.
3. Choose Pair a chat. A code shows.
4. Send the code to your bot from the chat it should answer. In a group, mention the bot first. The code works for 10 minutes, and five wrong codes void it.

Only that chat gets answers.

## Discord

1. On the Messaging page, open Discord and choose Open the Developer Portal. Make an application with a bot, and copy the bot's token.
2. Paste it as the Bot token.
3. Add your Discord user ID: the only person the bot answers.
4. Save. Talk to Letronna in a direct message to the bot, or in a server it is in.

A Webhook URL is optional: with one, Letronna can post results to a channel. With only a webhook and no bot, it sends but does not answer.

## Slack

1. On the Messaging page, open Slack and choose Open your Slack apps. Make an app for your workspace.
2. Paste its App-level token (it starts with `xapp-`) and its Bot token (it starts with `xoxb-`).
3. Choose Pair. Send the code shown to your app as a direct message. Whoever sends it is the one member answered; five wrong codes void it.

Talk to Letronna in a direct message, or mention it in a channel.

## With no window open

The chat apps are answered while the window is open, or hidden in the tray. To answer them with no window, for example on a computer that stays on, run:

```sh
letronna serve
```

It also runs your scheduled jobs. When you open the window, it takes over.

## While your computer is off

With [Letronna Cloud](/docs/cloud), the cloud can answer your Telegram chat while this computer is off:

```sh
letronna cloud relay on
```

`letronna cloud relay off` hands it back.
