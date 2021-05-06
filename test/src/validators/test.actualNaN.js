"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.actualNaN", () => {
  var data = ["NaN"];
  inputs.valid(data).forEach((valid) => {
    it(`can validate that ${valid.description} is NaN`, () => {
      assert.isTrue(is.actualNaN(valid.data));
    });
  });
  inputs.invalid(data).forEach((invalid) => {
    it(`can validate that ${invalid.description} is NOT NaN`, () => {
      assert.isFalse(is.actualNaN(invalid.data));
    });
  });
});
