"use strict";

const { is, assert } = require("../helper");

describe("is.variableWidth", () => {
  it("works", () => {
    assert.isTrue(is.variableWidth("ひらがなカタカナ漢字ABCDE"));
  });
});
