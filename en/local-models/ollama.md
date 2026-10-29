---
title: "Ollama"
description: "Using a model you run with Ollama: install, pull a model, pick it in Letronna."
---

[Ollama](https://ollama.com) runs open models on your computer. Letronna looks for it at `http://localhost:11434/v1` and lists its models with no setup: no key, no address to type.

## Set it up

1. Install Ollama from [ollama.com](https://ollama.com) and start it.
2. Download a model that can call tools, for example:

   ```sh
   ollama pull qwen3:8b
   ```

3. Pick the model from the model menu. Its models are listed under Ollama, beside your other gateways.

On first launch, choose **On this computer** on the setup page; its Local model row says "Detected" with the number of models once Ollama answers, or "Not found" until it does. In the terminal, the same choice is in `letronna setup`, and `/gateways` shows Ollama among the rest.

## When it does not answer

Ollama is listed only while it is running. If its models are missing from the menu, start Ollama and open the menu again. Then:

| It says | What to do |
|---|---|
| model not found, try pulling it first | `ollama pull` the model, with the name exactly as the menu shows it |
| the runner process has terminated | the model did not fit in memory, or crashed; try a smaller one |
| the conversation is too long | see [the context window](/docs/local-models/choosing-a-model#the-context-window) |

`letronna doctor --offline` checks the rest of the setup without the network; see [Troubleshooting](/docs/troubleshooting).
