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

Remove leading and trailing spaces and tabs
```javascript
const trim = require('trim-whitespace');

trim('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n');
// \nAnakin Skywalker\nPadme Amidala\n
```

Remove leading spaces and tabs
```javascript
const { leading } = require('trim-whitespace');

leading('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n');
// \nAnakin Skywalker \t\nPadme Amidala\t \n
```

Remove trailing spaces and tabs
```javascript
const { trailing } = require('trim-whitespace');

trailing('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n');
// \n \tAnakin Skywalker\n\t Padme Amidala\n
```

## API

```javascript
const trim = require('trim-whitespace');
```

### trim(_input_)

__input__: `string`

Removes leading and trailing spaces and tabs from each line of a string.

### trim.leading(_input_)

__input__: `string`

Removes leading spaces and tabs from each line of a string.

### trim.trailing(_input_)

__input__: `string`

Removes trailing spaces and tabs from each line of a string.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/trim-whitespace.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/trim-whitespace
[circleci-image]: https://img.shields.io/circleci/project/bcmarinacci/trim-whitespace/master.svg?style=flat-square
[circleci-url]: https://circleci.com/gh/bcmarinacci/trim-whitespace/tree/master
[coveralls-image]: https://img.shields.io/coveralls/bcmarinacci/trim-whitespace/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/bcmarinacci/trim-whitespace?branch=master
