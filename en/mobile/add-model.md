---
title: "Adding a model"
description: "Adding a model from Hugging Face to run on your iPhone."
---

You can run other models on your iPhone by pasting a link to them on Hugging Face. They need GGUF files, the kind that run on a phone.

1. Open Settings > **On this iPhone** > **Models**, and choose **Add from Hugging Face**.
2. Paste a link, such as `huggingface.co/unsloth/Qwen3.5-2B-GGUF`, or just `unsloth/Qwen3.5-2B-GGUF`. Tap **Find model**.
3. The app shows the model's licence and its files, and suggests one. Smaller files are quicker and take less room; bigger ones answer better. **Show all** lists every file.
4. Tap **Download** under the file you want.

**Browse GGUF models on Hugging Face** opens the list of them on the site.

## What the app checks

Each file is checked byte for byte against Hugging Face before it runs. Letronna has not tried models you add, so some may answer poorly or not start. They do not search the web.

Some models cannot be added:

| The app says | Why |
|---|---|
| There is no public model at that link. | the link is wrong, or the model is private |
| This model needs a Hugging Face account that has accepted its terms | the model is gated; look for a copy from another uploader |
| This model has no GGUF files | it cannot run on a phone; look for a version with GGUF in its name |
| This model only comes split into parts | the phone cannot load it; look for a smaller version |

## Removing one

Tap the model and choose **Remove from list**, or **Delete and remove from list** if it is downloaded. You can add it again from its link.
