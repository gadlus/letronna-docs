---
title: "Choosing a model"
description: "Which local model fits your memory, why it must call tools, and the context window."
---

## What fits

A model has to sit whole in memory to run at a useful speed: the GPU's memory on a PC with a graphics card, or the shared memory on an Apple silicon Mac. The download size is a good guide to what it takes, plus some room for the conversation.

| Memory free for the model | Size to look for |
|---|---|
| 8 GB | about 4 billion parameters (4B) |
| 16 GB | 7B to 9B |
| 32 GB | up to about 30B |
| 64 GB or more | 70B and the larger mixture-of-experts models |

These assume the usual 4-bit download. A model that does not fit either fails to load or spills onto the processor and slows to a crawl.

## Tools

The agent works through tool calls, so pick a model that was trained for them; its page on the server's library usually says "tools". Qwen and Llama models with tool support do well. Smaller models lose track over long tasks sooner: give them one job at a time, and switch to a [hosted model](/docs/hosted-models) for the hard parts.

## The context window

The context window is how much of the conversation the model reads at once. Local servers often serve a far smaller window than the model was trained for, and may cut a long prompt short without saying so. So unless a model's window is known, Letronna keeps a server with no key to a small budget and clears old tool results early.

If you have raised the window on the server, tell Letronna how large it is: see [A model on your own server answers badly](/docs/troubleshooting#a-model-on-your-own-server-answers-badly).

`/compact` summarises earlier turns when a conversation still grows too long.
