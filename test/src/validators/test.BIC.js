"use strict";

const { is, assert } = require("../helper");

describe("is.BIC", () => {
  it("works", () => {
    assert.isTrue(is.BIC("SBICKEN1345"));
    assert.isFalse(is.BIC("S23CKENXXXX"));
  });
});
