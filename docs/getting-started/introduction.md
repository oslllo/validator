![Cover Image](../images/cover.png)

[![build](https://img.shields.io/travis/oslllo/validator)](https://travis-ci.com/github/oslllo/validator)
[![npm](https://img.shields.io/npm/v/oslllo-validator)](https://www.npmjs.com/package/oslllo-validator)
[![Coverage Status](https://img.shields.io/coveralls/github/oslllo/validator)](https://coveralls.io/github/oslllo/validator?branch=master)

## The Objective

Create an all in one Javascript validator for my application.

## The Problem / Why

Validating data in JS requires too much code repetition or for you to install multiple packages that either validate one thing, or just a few things. This can be fine if you only have one or two projects to maintain or you just don't care/mind coding this way, but thing can get real messy quick when you have multiple packages that all share the same validation requirements.

### Usage Examples

#### Check if value is actual NaN

```js
const is = require("oslllo-validator");

is.actualNaN(NaN); // => True
is.actualNaN(null); // => False
is.actualNaN(undefined); // => False
```

#### Check if UUID

```js
const is = require("oslllo-validator");

is.UUID("A987FBC9-4BED-3078-CF07-9141BA07C9F3", 3); // => True
is.UUID("xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3", 3); // => False
```

---
