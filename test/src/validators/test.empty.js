"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.empty", () => {
  var data = [
    "''",
    "Object('')",
    "[]",
    "{}",
    "null",
    "undefined",
    "false",
    "0",
    "NaN",
    "0 / 1",
    "0 / -1",
    "arguments (empty)",
    "sliced arguments (empty)",
  ];
  inputs.valid(data).forEach((valid) => {
    it(`can validate that ${valid.description} is empty`, () => {
      assert.isTrue(is.empty(valid.data));
    });
  });
  inputs.invalid(data).forEach((invalid) => {
    it(`can validate that ${invalid.description} is NOT empty`, () => {
      assert.isFalse(is.empty(invalid.data));
    });
  });
});
