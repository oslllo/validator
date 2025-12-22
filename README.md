![Cover Image](docs/images/cover.png)

[![CI/Test](https://github.com/oslllo/validator/actions/workflows/ci.test.yml/badge.svg)](https://github.com/oslllo/validator/actions/workflows/ci.test.yml)
[![npm](https://img.shields.io/npm/v/oslllo-validator)](https://www.npmjs.com/package/oslllo-validator)
[![Coverage Status](https://img.shields.io/coveralls/github/oslllo/validator)](https://coveralls.io/github/oslllo/validator?branch=master)

## Documentation, Installation, and Usage Instructions

### Usage Examples

#### Check if value is actual NaN

```js
const is = require("oslllo-validator");

is.actualNaN(NaN); // => True
is.actualNaN(null); // => False
is.actualNaN(undefined); // => False
```

## Available function

```js
is.actualNaN;
is.base64;
is.buffer;
is.dataURI;
is.defined;
is.empty;
is.element;
is.fn;
is.hexColor;
is.number;
is.number;
is.object;
is.pathToDir;
is.pathToFile;
is.string;
is.string;
is.svg;
```
