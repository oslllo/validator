"use strict";

const _actualNaN = require("./validators/actualNaN");

const _base64 = require("./validators/base64");
const _buffer = require("./validators/buffer");

const _dataURI = require("./validators/dataURI");
const _defined = require("./validators/defined");

const _empty = require("./validators/empty");
const _element = require("./validators/element");

const _fn = require("./validators/fn");

const _hexColor = require("./validators/hexColor");

const _number = require("./validators/number");

const _object = require("./validators/object");

const _pathToDir = require("./validators/pathToDir");
const _pathToFile = require("./validators/pathToFile");

const _string = require("./validators/string");
const _svg = require("./validators/svg");

const internal = require("./internal");

var validator = Object.defineProperties(
  {},
  {
    _internal: {
      writable: false,
      value: internal,
    },
  }
);

Object.assign(validator, {
  actualNaN: _actualNaN,

  base64: _base64,
  buffer: _buffer,

  dataURI: _dataURI,
  defined: _defined,

  empty: _empty,
  element: _element,

  fn: _fn,

  hexColor: _hexColor,

  number: _number,

  object: _object,

  pathToDir: _pathToDir,
  pathToFile: _pathToFile,

  string: _string,
  svg: _svg,
});

module.exports = validator;
