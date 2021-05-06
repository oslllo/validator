"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.odd", () => {
  var data = ["1", "1.1", "Infinity", "-Infinity"];
  inputs.valid(data).forEach((valid) => {
    it(`can validate that ${valid.description} is odd`, () => {
      assert.isTrue(is.odd(valid.data));
    });
  });
  inputs.invalid(data).forEach((invalid) => {
    it(`can validate that ${invalid.description} is NOT odd`, () => {
      assert.isFalse(is.odd(invalid.data));
    });
  });
});
