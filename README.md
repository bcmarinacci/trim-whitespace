# trim whitespace [![Build Status](https://travis-ci.org/bcmarinacci/trim-whitespace.svg?branch=master)](https://travis-ci.org/bcmarinacci/trim-whitespace)

> Trim leading and/or trailing string whitespace.

## Install
```bash
npm install --save trim-whitespace
```

## Usage

Trim leading and trailing spaces and/or tabs
```javascript
const trim = require('trim-whitespace');

trim('  Anakin Skywalker  \n  Padme Amidala  ');
// 'Anakin Skywalker\nPadme Amidala'

trim('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t');
// 'Anakin Skywalker\nPadme Amidala'
```

Trim leading spaces and/or tabs
```javascript
const { leading } = require('trim-whitespace');

leading('  Anakin Skywalker  \n  Padme Amidala  ');
// 'Anakin Skywalker  \nPadme Amidala  '

leading('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t');
// 'Anakin Skywalker\t\t\nPadme Amidala\t\t'
```

Trim trailing spaces and/or tabs
```javascript
const { trailing } = require('trim-whitespace');

trailing('  Anakin Skywalker  \n  Padme Amidala  ');
// '  Anakin Skywalker\n  Padme Amidala'

trailing('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t');
// '\t\tAnakin Skywalker\n\t\tPadme Amidala'
```

## API

```javascript
const trim = require('trim-whitespace');
```

### trim(input)

__input__: `string`

Accepts a string and returns a string without leading and trailing spaces and/or tabs.

### trim.leading(input)

__input__: `string`

Accepts a string and returns a string without leading spaces and/or tabs.

### trim.trailing(input)

__input__: `string`

Accepts a string and returns a string without trailing spaces and/or tabs.
