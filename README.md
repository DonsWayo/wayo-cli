wayo-cli
========

Generate command tool

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wayo-cli.svg)](https://npmjs.org/package/wayo-cli)
[![CircleCI](https://circleci.com/gh/DonsWayo/wayo-cli/tree/master.svg?style=shield)](https://circleci.com/gh/DonsWayo/wayo-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/wayo-cli.svg)](https://npmjs.org/package/wayo-cli)
[![License](https://img.shields.io/npm/l/wayo-cli.svg)](https://github.com/DonsWayo/wayo-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wayo-cli
$ wayo COMMAND
running command...
$ wayo (-v|--version|version)
wayo-cli/0.0.0 darwin-x64 node-v10.15.3
$ wayo --help [COMMAND]
USAGE
  $ wayo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wayo hello [FILE]`](#wayo-hello-file)
* [`wayo help [COMMAND]`](#wayo-help-command)
* [`wayo init [FILE]`](#wayo-init-file)

## `wayo hello [FILE]`

describe the command here

```
USAGE
  $ wayo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ wayo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/DonsWayo/wayo-cli/blob/v0.0.0/src/commands/hello.ts)_

## `wayo help [COMMAND]`

display help for wayo

```
USAGE
  $ wayo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `wayo init [FILE]`

describe the command here

```
USAGE
  $ wayo init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/DonsWayo/wayo-cli/blob/v0.0.0/src/commands/init.ts)_
<!-- commandsstop -->
