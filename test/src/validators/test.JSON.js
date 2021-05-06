"use strict";

const { is, assert } = require("../helper");

describe("is.JSON", () => {
  it("works", () => {
    assert.isTrue(is.JSON("{ \"key\": \"value\" }"));
  });
  it("works with arguments", () => {
    assert.isTrue(
      is.JSON("null", { allow_primitives: true })
    );
    assert.isFalse(
      is.JSON("1234", { allow_primitives: true })
    );
  });
});
