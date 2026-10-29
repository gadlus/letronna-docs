---
title: "Other local servers"
description: "Adding LM Studio, llama.cpp, vLLM or any OpenAI-compatible server as a gateway of your own."
---

Any server that speaks the OpenAI chat API can be a gateway: LM Studio, llama.cpp's `llama-server`, vLLM, a LiteLLM proxy. Letronna needs its base URL, the address that ends in `/v1`, and a key only if the server asks for one.

## Add one

**In the app:** Settings > Accounts, then **Add** beside "A gateway of your own". Give it a name, its base URL (like `http://localhost:1234/v1`) and, if it needs one, an API key, then **Add gateway**.

**In the terminal:** `/gateways`, then "Add a gateway of your own".

Add as many as you like; each gets its own name and its models appear in the model menu under it. The usual addresses:

| Server | Base URL, by default |
|---|---|
| LM Studio | `http://localhost:1234/v1`, once its server is started |
| llama.cpp (`llama-server`) | `http://localhost:8080/v1` |
| vLLM | `http://localhost:8000/v1` |

Start the server with tool calling switched on where it asks for that (llama.cpp, for one, needs `--jinja`), or the model can chat but not use tools.

## Another computer on your network

Plain `http://` is allowed to this computer only. A key sent over plain HTTP can be read by anyone else on the network, and that network may be a café's. To reach a server elsewhere on your own network, such as a desktop with a big GPU, use HTTPS, or opt in to plain HTTP on the local network:

```sh
LETRONNA_ALLOW_HTTP=1 letronna
```

A server out on the internet always needs HTTPS.
