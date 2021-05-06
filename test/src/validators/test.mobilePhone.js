"use strict";

const { is, assert } = require("../helper");

describe("is.mobilePhone", () => {
  it("works", () => {
    assert.isTrue(is.mobilePhone("0821231234", "en-ZA"));
    assert.isFalse(is.mobilePhone("08212312345", "en-ZA"));
  });
});
