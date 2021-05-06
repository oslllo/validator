"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.decimal", () => {
  var data = ["1.1"];
  inputs.valid(data).forEach((valid) => {
    it(`can validate that ${valid.description} is a valid decimal`, () => {
      assert.isTrue(is.decimal(valid.data));
    });
  });
  inputs.invalid(data).forEach((invalid) => {
    it(`can validate that ${invalid.description} is NOT a valid decimal`, () => {
      assert.isFalse(is.decimal(invalid.data));
    });
  });
});
