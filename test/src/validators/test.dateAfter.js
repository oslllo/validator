"use strict";

const { is, assert } = require("../helper");

describe("is.dateAfter", () => {
  it("works", () => {
    assert.isTrue(is.dateAfter("2011-08-04", "2011-08-03"));
    assert.isFalse(is.dateAfter("2010-07-02", "2011-08-03"));
  });
});
