"use strict";

const { is, assert } = require("../helper");

describe("is.hash", () => {
  it("works", () => {
    assert.isTrue(is.hash("0bf1c35032a71a14c2f719e5a14c1e96", "md5"));
  });
  it("works with arguments", () => {
    assert.isTrue(is.hash("d94f3f016ae679c3008de268209132f2", "md5"));
    assert.isFalse(is.hash("q94375dj93458w34", "md5"));
  });
});
