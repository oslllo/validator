"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.number", () => {
  var data = [
    "Object(42)",
    "0",
    "1",
    "2",
    "1.1",
    "0 / 1",
    "0 / -1",
    "NaN",
    "Infinity",
    "-Infinity",
  ];
  inputs.valid(data).forEach((valid) => {
    it(`can validate that ${valid.description} is a number`, () => {
      assert.isTrue(is.number(valid.data));
    });
  });
  inputs.invalid(data).forEach((invalid) => {
    it(`can validate that ${invalid.description} is NOT a number`, () => {
      assert.isFalse(is.number(invalid.data));
    });
  });
});
