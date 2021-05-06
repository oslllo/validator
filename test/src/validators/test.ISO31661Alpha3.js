"use strict";

const { is, assert } = require("../helper");

describe("is.ISO31661Alpha3", () => {
  it("works", () => {
    assert.isTrue(is.ISO31661Alpha3("ABW"));
    assert.isFalse(is.ISO31661Alpha3("FR"));
  });
});
