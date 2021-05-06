"use strict";

const { is, assert } = require("../helper");

describe("is.slug", () => {
  it("works", () => {
    assert.isTrue(is.slug("cs-cz", "cs_67CZ"));
    assert.isFalse(is.slug("not-----------slug", "cs_67CZ"));
  });
});
