---
title: "Telegram while your computer is off"
description: "Have Letronna Cloud answer your Telegram chat when this computer is off."
---

If Letronna answers you on Telegram (see [Telegram, Discord and Slack](/docs/chat-apps)), it does so from your computer. Switch on the relay and Letronna Cloud answers in its place whenever that computer has been off for three minutes.

```sh
letronna cloud relay on
```

- Each message from your paired chat becomes a cloud task, all on one thread, and the answer comes back to the chat.
- As soon as your computer is back and listening, the cloud lets go.
- Each answer is paid from your credit, as any task: see [Costs](/docs/cloud/costs).
- The cloud cannot see your computer's files.

Only Telegram is relayed.

To switch it off:

```sh
letronna cloud relay off
```
