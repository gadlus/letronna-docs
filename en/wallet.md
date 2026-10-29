---
title: "Wallet"
description: "The wallet the agent pays from: paying sites that ask to be paid, sending money, and the limits you set."
---

Letronna has a wallet of its own that the agent can pay from, within limits you set. It is separate from your credit and from the LETRO wallet on letronna.ai (see [LETRO](/docs/letro)).

- Make a new wallet, or bring one in from MetaMask, Phantom or any wallet app by its recovery phrase or key.
- It works on Base, Ethereum, Solana and any EVM network.
- Sites that ask to be paid (x402) are paid in USDC, within your limits: asked each time, or paid on their own below a price you choose.
- Sending money always asks.
- Keys stay in the system's vault. The agent never sees them.

Open the Wallet page in the window, Settings > Wallet, `/wallet` in a session, or `letronna wallet` in the terminal.

## Setting it up

```sh
letronna wallet new
letronna wallet import
letronna wallet balance
```

`new` makes a wallet with a new recovery phrase; keep that phrase safe. `import` brings one in by its recovery phrase or a key; `--index <n>` picks which account under the phrase, from 0. `watch <address>` only follows an address's balances.

## Limits

```sh
letronna wallet limits --per-payment 1 --per-day 5 --per-month 50
letronna wallet x402 ask
```

| Option | Does |
|---|---|
| `--auto-up-to <$>` | the most an x402 payment costs to be paid without asking |
| `--per-payment <$>` | the cap on one payment by the agent |
| `--per-day <$>` | the cap on what it spends in 24 hours |
| `--per-month <$>` | the cap on what it spends in 30 days |

`letronna wallet x402` takes `off`, `ask` or `auto`. The caps hold even when you say yes to a payment; what you send yourself is not counted.

To stop the agent paying at once, and to let it again:

```sh
letronna wallet pause
letronna wallet resume
```

## More commands

| Command | Does |
|---|---|
| `letronna wallet` | wallets, rules and what was spent |
| `letronna wallet list` | the wallets and their addresses |
| `letronna wallet history` | the latest payments |
| `letronna wallet send <amount> [token] to <address> on <network>` | send money yourself; asks first |
| `letronna wallet sites allow\|block\|clear [site]` | pay only these sites, or never these |
| `letronna wallet chains` | the networks; switch one on or off, or set its RPC |
| `letronna wallet prefer <network>...` | the networks tried first when a site takes several |
| `letronna wallet tokens add <network> <address>` | a token to show and send |
| `letronna wallet save <name> <address>` | keep an address to send to |
| `letronna wallet only-saved on\|off` | the agent sends only to saved addresses |
| `letronna wallet default <name>` | the wallet that pays when none is named |
| `letronna wallet rename <name> <new>` | call a wallet something else |
| `letronna wallet reveal <name>` | show its recovery phrase or key |
| `letronna wallet remove <name>` | take a wallet out of Letronna |

A command that sends, shows a key or changes the rules runs only when you type it at a terminal, never when the agent runs it.
