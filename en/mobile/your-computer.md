---
title: "Your computer"
description: "Pairing the phone with Letronna on your computer, chatting with it, and managing its accounts."
---

You can use Letronna on your own computer from the phone. The chat runs on the computer, with its models and tools, and the phone shows it. What you send is encrypted end to end, so Letronna's servers cannot read it.

## Pairing

1. On your computer, open Letronna, then **Messaging**, then **Letronna app**, and choose **Pair a phone**. It shows a code.
2. On the phone, open Settings > **Pair with a computer**, and allow the camera.
3. Scan the code.
4. Check that the computer shows the same six digits as the phone, then choose **Pair** on the computer.

If your computer and phone are on the same Tailscale tailnet, the phone reaches the computer straight over it.

## Chatting on your computer

In the composer, choose **Computer** under **Where it runs**. The computer's name shows where the model's name would.

When Letronna on the computer wants to do something that asks first, the phone asks "Allow on" the computer: choose **Allow** or **Deny**. See [Asking first and modes](/docs/app/permissions).

A chat on your computer stays on it. To use Letronna Cloud, start a new chat.

If the phone cannot reach it, check that Letronna is open on the computer, with **Letronna app** switched on under **Messaging**.

## Accounts on the computer

Tap a computer in Settings > **Computers** to see **Accounts on this computer**: your ChatGPT and Claude plans and your API keys. They live on the computer, in its vault. The phone adds and checks them over the encrypted link; it never keeps a key.

Each plan shows how much is left, or **Limit reached** and when it resets. **Check now** asks again.

To add one, choose **Add an account**, pick the provider, then:

- **Plan:** choose **Continue**, open the page, sign in, and type or paste the code it asks for.
- **API key:** paste the key and choose **Add to computer**. The computer checks it.

A second account of the same provider needs a name, such as Work. Under **Next account when one runs out**, set the order Letronna uses them in when one reaches its limit. Some providers' terms do not allow using more accounts to get past a plan's limits.

Tap an account for **Use first**, **Sign out on this computer** or **Remove from this computer**. The computer has to be on to add an account.

## Forgetting a computer

Choose **Forget this computer**. The phone stops reaching it. Remove the phone on the computer too, under **Messaging**.
