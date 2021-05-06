"use strict";

const { is, assert } = require("../helper");

describe("is.latLong", () => {
  it("works", () => {
    assert.isTrue(is.latLong("(-17.738223, 85.605469)"));
  });
  it("works with arguments", () => {
    assert.isTrue(
      is.latLong("40° 26′ 46″ N, 79° 58′ 56″ W", {
        checkDMS: true,
      })
    );
    assert.isFalse(
      is.latLong("100° 26′ 46″ N, 79° 70′ 56″ W", {
        checkDMS: true,
      })
    );
  });
});
