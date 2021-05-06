"use strict";

const { is, assert } = require("../helper");

describe("is.strongPassword", () => {
  it("works with arguments", () => {
    assert.isTrue(
      is.strongPassword("mxH_+2vs&54_+H3P", {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    );
    assert.isFalse(
      is.strongPassword("hunter2", {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    );
  });
});
