---
title: "Scripts and one-shot runs"
description: "letronna -p: asking once from a script, its options, JSON output and running with nothing set up."
---

`letronna -p` asks one question, prints the answer and exits. Nobody watches such a run, so it never waits on a question: it decides from the task and the project folder.

```sh
letronna -p "list the TODOs in src and say which are urgent"
```

In the default mode, a `-p` run cannot write files or run commands, and warns you of it. Choose a mode that allows what it needs:

```sh
letronna -p --mode accept-edits "fix the failing test"
```

See [Asking first and modes](/docs/app/permissions).

## Options

| Option | Does |
|---|---|
| `--output <form>` | `text` (the answer), `json`, or `stream-json` |
| `--max-rounds <n>` | tool rounds a message gets before it stops (100) |
| `--model <name>` | use this model instead of the one set up |
| `--tools <a,b>` | only these tools, by name |
| `--budget <tokens>` | stop once this many tokens are spent, over every message the run is sent |
| `--input-format <form>` | `text` (the question), or `stream-json`: messages, interrupts and answers as JSON lines on stdin |
| `--permission-prompt-tool stdio` | with `stream-json` in, ask stdin about each call that needs a yes |
| `--json-schema <file>` | answer in JSON this schema checks; the schema itself can stand in for the file |
| `--dump-config` | print the settings and limits a `-p` run with the same flags gets, as JSON, without running |

`--json-schema` needs a new session, so it does not go with `-c`, `-r` or `stream-json` in.

## JSON output

`--output json` prints one JSON object with the answer and what it took: the session, the model, the cost, and how many calls were refused. `--output stream-json` prints a JSON line each time the run moves on, then that object as the last line.

```sh
letronna -p --output json "how many files are in this folder?"
```

## A time limit

`LETRONNA_DEADLINE` gives the run a number of seconds. At 80% of it, the run is told to write its outputs; at the end it stops, with a result whose status is `deadline`.

```sh
LETRONNA_DEADLINE=600 letronna -p --mode bypass "build the report"
```

## Running with nothing set up

In a container or on a fresh machine, a `-p` run can take its server from the environment, saving none of it:

| Variable | Does |
|---|---|
| `AGENT_BASE_URL` | ask this OpenAI-compatible server instead of the gateway set up |
| `AGENT_API_KEY` | the key to send it |
| `AGENT_MODEL` | the model to ask, unless `--model` names one |

```sh
AGENT_BASE_URL=http://localhost:11434/v1 AGENT_MODEL=llama3.2 letronna -p "hello"
```
