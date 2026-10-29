---
title: "Hosted models and credit"
description: "Letronna's own models: how credit works, what Pro changes, and making images, speech and video."
---

Signed in, the Letronna gateway gives you chat models from Anthropic, OpenAI, Google and others with no key to paste. Each request is paid from your credit at the price on the [models page](/dashboard/models).

## Credit and plans

- **Credit** is bought from $1, never runs out on a date, and works on every plan. A request is refused, with a message saying so, once it has run out; your own keys keep working.
- **Pro** ($20 a month, or $199.20 a year) adds $20 of credit every month, charges less for every hosted model, and allows three times the requests a minute.
- **Team** puts one credit pool behind a group: see [Teams](/docs/teams).
- Each computer and each account has a per-minute limit on requests, well above normal use; past it, Letronna says how long to wait.

The [usage page](/dashboard/usage) shows what you spent on text, media and [Letronna Cloud](/docs/cloud), thirty days day by day, each model's published price beside what you paid, and how much that saved.

## Images, speech and video

Whatever gateway the chat uses, the agent can also make things on the hosted models, each asking first since it spends credit:

| Tool | Makes | Paid by |
|---|---|---|
| `make_image` | an image from a description | the image |
| `speak` | text read aloud | the character |
| `transcribe` | the words in an audio or video file, up to 25 MB | the minute |
| `make_video` | a short video from a description, in a few minutes | the second |

Unless you name a model (`/model image`, `/model speech`, `/model video`), the cheapest one working is used. What is made is saved in `media/` in the project folder.
