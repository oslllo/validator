"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.object", () => {
  var data = ["{}", "{ a: 1 }", "arguments (fake)"];
  inputs.valid(data).forEach((valid) => {
    it(`can validate that ${valid.description} is an object`, () => {
      assert.isTrue(is.object(valid.data));
    });
  });
  inputs.invalid(data).forEach((invalid) => {
    it(`can validate that ${invalid.description} is NOT an object`, () => {
      assert.isFalse(is.object(invalid.data));
    });
  });
  if (typeof Symbol === "function") {
    it("can validate that symbol is not an object", () => {
      assert.isFalse(is.object(Symbol("foo")));
    });
  }
});
