# trim whitespace

[![npm](https://img.shields.io/npm/v/trim-whitespace.svg?style=flat-square)](https://www.npmjs.com/package/trim-whitespace)
[![node](https://img.shields.io/node/v/trim-whitespace.svg?style=flat-square)](https://github.com/nodejs/node)
[![CircleCI](https://img.shields.io/circleci/project/github/bcmarinacci/trim-whitespace.svg?style=flat-square)](https://circleci.com/gh/bcmarinacci/trim-whitespace)
[![Coveralls](https://img.shields.io/coveralls/bcmarinacci/trim-whitespace.svg?style=flat-square)](https://coveralls.io/github/bcmarinacci/trim-whitespace)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> Remove leading and/or trailing spaces and tabs from each line of a string

## Install

```bash
$ npm install trim-whitespace --save
```

## Usage

Remove leading and trailing spaces and tabs from a string.

```javascript
const trim = require('trim-whitespace');

trim('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n');
// \nAnakin Skywalker\nPadme Amidala\n
```

Remove leading spaces and tabs from a string.

```javascript
const { leading } = require('trim-whitespace');

leading('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n');
// \nAnakin Skywalker \t\nPadme Amidala\t \n
```

Remove trailing spaces and tabs from a string.

```javascript
const { trailing } = require('trim-whitespace');

trailing('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n');
// \n \tAnakin Skywalker\n\t Padme Amidala\n
```

## API

```javascript
const trim = require('trim-whitespace');
```

### trim(_str_)

Returns a string without any leading or trailing spaces or tabs.

#### str

- type: `String`

The string to trim.

### trim.leading(_str_)

Returns a string without any leading spaces or tabs.

#### str

- type: `String`

The string to trim.

### trim.trailing(_str_)

Returns a string without any trailing spaces or tabs.

#### str

- type: `String`

The string to trim.
