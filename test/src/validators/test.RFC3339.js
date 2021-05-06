"use strict";

const { is, assert } = require("../helper");

describe("is.RFC3339", () => {
  it("works", () => {
    assert.isTrue(is.RFC3339("2009-05-19 14:39:22-06:00"));
    assert.isFalse(is.RFC3339("2010-02-18t00:23:32.33+24:00"));
  });
});
