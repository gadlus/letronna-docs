---
title: "Settings"
description: "Every page of the window's Settings, and what each option does."
---

Open Settings with Ctrl+, (Cmd+, on macOS), from the account menu in the top bar, or from the [command palette](/docs/app/window/palette). Up and Down move between the pages, and Tab moves through a page. Escape, or the close button, closes it.

| Page | Holds |
|---|---|
| **Account** | who is signed in, your plan and credit, and who pays |
| **Usage** | tokens and cost, added up from your sessions |
| **Accounts** | your gateways and their keys |
| **Search** | where the agent searches the web |
| **Model** | the default model, fallbacks and session names |
| **Appearance** | theme, film grain and motion |
| **Thinking** | effort, reply style, and what a reply may do |
| **Memory** | what Letronna keeps between chats |
| **Privacy** | the default mode, notifications, keeping sessions, and Discord |
| **Wallet** | the agent's wallet |
| **Shortcuts** | the Quick Entry key |
| **Plugins** | optional integrations |
| **About** | the version, and updates |

## Account

Signed out, **Sign in in the browser** opens letronna.ai. If the browser does not open, **Open the page again** or **Copy link**. Hosted models and cloud runs need a Letronna account; your own keys do not.

Signed in, the page shows your **Name**, **Email**, **Plan**, **Credits** and **Team**.

- **Bill hosted models to**: **Personal**, or a team you are in. One pays for each call, never both. It is the same choice as `/team` in the terminal. See [Teams](/docs/teams).
- **Open dashboard** opens your [dashboard](/docs/dashboard). **Refresh** reads your account again.
- **Sign out** signs out here and in the terminal alike. Your chats and settings stay where they are.

## Usage

Tokens and cost of the model calls, added up from the saved sessions. Ctrl+Shift+U opens it too.

- **This session**, **The last 7 days** and **By model, the last 7 days** add them up, with how much of the input was cached.
- **Insights** shows your recent weeks: **Tokens by day**, **Replies by hour of the day**, **Top tools** and **Top models**.
- **Cache misses in this session** lists replies the provider served without its cache, and why.

The same is `/usage` and `/insights` in the terminal.

## Accounts

Each gateway, with where it stands, its key, and a way to sign in or set it up. See [Gateways](/docs/gateways).

## Search

Where the agent searches the web. It asks you before each search.

- Signed in, it searches through your Letronna account, paid by the search from your credit, with DuckDuckGo when that cannot answer.
- A service of your own saved here is used instead. **Add key** or **Add address**, then **Save and use**. **Reset** goes back to the service's official address, and **Remove** forgets it.
- **Use alone** on DuckDuckGo keeps every search off what is paid.
- **Search with DuckDuckGo when no search key is set** turns that fallback on or off.

Keys stay on this computer. The **Web** switch in the composer is different: it is the gateway's own search inside a reply, where it has one. See [What the agent can do](/docs/app/tools).

## Model

- **Default model**: the model for new messages. Pick one in the composer, or type its id here.
- **Fallbacks**: models asked in order when yours is overloaded, out of credit or gone. Write `gateway:model` for one on another gateway. One that fails is passed over for 5 minutes.
- **Save** keeps both.

### Session names

**Name sessions with a model**: once a session's first reply is in, a model gives it a short name. Off, it keeps the first line of what you asked.

| Choice | Names it |
|---|---|
| **Automatic** | Letronna's quick model for a chat on Letronna; otherwise your side model, or the chat's own |
| **This chat's model** | the model the chat is on |

Or type a model of your own and press **Save**. See [Sessions](/docs/app/sessions).

## Appearance

The theme, film grain and motion. See [Appearance](/docs/app/window/appearance).

## Thinking

For the session on screen and new ones.

- **Effort**: how hard the model thinks. **Whatever the model likes**, or one of the levels the model offers. Models that cannot be told carry on as they are.
- **Style**: how replies are written. **Default** is as Letronna usually writes; your own styles are listed too. See `/style` in [What the agent can do](/docs/app/tools).

| Switch | Does |
|---|---|
| **Show the thinking** | prints the model's reasoning as it arrives, not only the answer |
| **Search the web** | lets the gateway look things up for an answer, and cite the pages it read |
| **Read replies aloud** | speaks each reply as it streams; see [Voice](/docs/app/window/voice) |
| **Check changes before finishing** | after changing files, asks the model once to build or test before it says the work is done |

## Memory

What Letronna keeps from one chat to the next. Edit or delete each entry, and write `SOUL.md`. Ctrl+S saves. See [Memory](/docs/app/memory).

## Privacy

**Agent**

- **Default mode**: the mode new sessions start in. See [Asking first and modes](/docs/app/permissions).

**Notifications**

- **Notify when Letronna needs you**: while the window is hidden or behind others, the computer tells you when a reply ends, a card or question is waiting, or a helper or scheduled run is done. Clicking one opens its session.

**Sessions**

- **Delete sessions older than N days**: sessions untouched for that many days are deleted. Empty keeps them all. Pinned sessions and the one in use are kept. Letronna looks at most once a day, when it starts with no other copy open. Press **Save**.

**Discord Rich Presence**

- **What to share**: **Show what I am doing**, or **Hide activity details**. Turn the integration on under **Plugins** first.

## Wallet

The wallet's networks and limits. See [Wallet](/docs/wallet).

## Shortcuts

The key that opens Quick Entry from anywhere. See [Quick Entry](/docs/app/window/quick-entry).

## Plugins

Optional integrations, each marked **Built in** or **External**. Switch one off to unload it.

| Plugin | Does |
|---|---|
| **ChatGPT** | the Codex models your ChatGPT plan includes, signed in with ChatGPT instead of an API key |
| **Claude** | the models your Claude subscription includes, signed in with Claude instead of an API key |
| **Discord Rich Presence** | shows Letronna on your Discord profile; what it shows is set in Privacy |

The choices are kept in `plugin-switches.json` in your [data folder](/docs/data-and-privacy).

## About

The version and build. **Check for updates** looks for a newer version, and **Download** gets it when there is one. The tray's **Check for updates** opens this page.
