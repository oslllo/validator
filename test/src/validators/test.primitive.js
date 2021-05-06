"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.primitive", () => {
  var data = [
    "undefined",
    "0",
    "1",
    "2",
    "null",
    "'abc'",
    "'123'",
    "1.1",
    "0 / 1",
    "0 / -1",
    "NaN",
    "true",
    "false",
    "''",
    "Infinity",
    "-Infinity",
    "BigInt(42)",
    "Function('return 42n')()",
  ];
  inputs.valid(data).forEach((valid) => {
    it(`can validate that ${valid.description} is a primitive`, () => {
      assert.isTrue(is.primitive(valid.data));
    });
  });
  inputs.invalid(data).forEach((invalid) => {
    it(`can validate that ${invalid.description} is NOT a primitive`, () => {
      assert.isFalse(is.primitive(invalid.data));
    });
  });
  describe("Symbol", () => {
    if (typeof Symbol === "function") {
      it("can validate that symbol is a primitive", () => {
        assert.isTrue(is.primitive(Symbol("foo")));
      });
    }
  });
});
