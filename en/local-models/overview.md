---
title: "Local models"
description: "Running a model on your own computer: why you might, and what you need."
---

Letronna can use a model running on your own computer instead of one in the cloud. Your messages, files and tool results then never leave the machine, nothing is paid per request, and the agent keeps working with no internet.

The trade is quality and speed. A model small enough for a laptop is well behind the hosted ones at long, many-step work, and it answers only as fast as your hardware lets it.

## What you need

- **A server that runs the model.** Letronna does not run models itself; it talks to a server on your computer over the same OpenAI-compatible API it uses for every [gateway](/docs/gateways). [Ollama](/docs/local-models/ollama) is found by itself; [LM Studio, llama.cpp and others](/docs/local-models/other-servers) are added by their address.
- **A model that fits.** Memory is what decides: see [Choosing a model](/docs/local-models/choosing-a-model).
- **One that can call tools.** The agent reads, writes and runs things through tool calls. A model made only for chat can talk, but not act.

No account and no key are needed for a local model.

## In this section

- [Ollama](/docs/local-models/ollama): the quickest way to start
- [Other local servers](/docs/local-models/other-servers): LM Studio, llama.cpp, vLLM and anything OpenAI-compatible
- [Choosing a model](/docs/local-models/choosing-a-model): what fits your memory, and the context window
- [Working offline](/docs/local-models/offline): what still works with no internet
- [Serving your accounts to other tools](/docs/local-models/local-endpoint): the Local endpoint

The phone app runs small models on the device itself: see [Mobile models](/docs/mobile/models).
