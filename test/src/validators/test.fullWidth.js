"use strict";

const { is, assert } = require("../helper");

describe("is.fullWidth", () => {
  it("works", () => {
    assert.isTrue(is.fullWidth("ひらがな・カタカナ、．漢字"));
    assert.isFalse(is.fullWidth("abc123"));
  });
});
