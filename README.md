# trim whitespace

[![NPM Version][npm-image]][npm-url]
[![Build Status][circleci-image]][circleci-url]
[![Coverage Status][coveralls-image]][coveralls-url]

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

type: `String`

The string to trim.

### trim.leading(_str_)

Returns a string without any leading spaces or tabs.

#### str

type: `String`

The string to trim.

### trim.trailing(_str_)

Returns a string without any trailing spaces or tabs.

#### str

type: `String`

The string to trim.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/trim-whitespace.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/trim-whitespace
[circleci-image]: https://img.shields.io/circleci/project/bcmarinacci/trim-whitespace/master.svg?style=flat-square
[circleci-url]: https://circleci.com/gh/bcmarinacci/trim-whitespace/tree/master
[coveralls-image]: https://img.shields.io/coveralls/bcmarinacci/trim-whitespace/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/bcmarinacci/trim-whitespace?branch=master
