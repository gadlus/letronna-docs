---
title: "Gateways"
description: "Where Letronna gets its models: your Letronna account, OpenAI, OpenRouter, Ollama or any OpenAI-compatible server."
---

A gateway is where the models come from. Set up as many as you like; the model menu lists them all, and each message goes to the gateway of the model you picked. See them in Settings > Accounts in the app, or with `/gateways` in the terminal.

| Gateway | Address | Needs |
|---|---|---|
| **Letronna** | `https://api.letronna.ai/v1` | signing in; paid from your credit |
| **OpenAI** | `https://api.openai.com/v1` | an OpenAI API key |
| **OpenRouter** | `https://openrouter.ai/api/v1` | an OpenRouter key; hundreds of models |
| **Ollama** | `http://localhost:11434/v1` | Ollama running on this computer; works offline |
| **Custom** | any OpenAI-compatible server | its address, and a key if it asks for one |

Keys are kept in `keys.json` in your data folder, on your disk only, and never reach the model. Your own keys cost nothing on Letronna's side: you pay the provider directly.

You can also connect Anthropic with an Anthropic API key, or sign in with a Claude subscription to use the models your plan includes, with no key to paste. When your model is overloaded or out of credit, Letronna can carry on with a fallback model you name.
