"use strict";

const { is, assert } = require("../helper");

describe("is.passportNumber", () => {
  it("works", () => {
    assert.isTrue(is.passportNumber("AF0549358", "AM"));
    assert.isFalse(is.passportNumber("A1054935", "AM"));
  });
});
