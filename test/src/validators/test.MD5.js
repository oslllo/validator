"use strict";

const { is, assert } = require("../helper");

describe("is.MD5", () => {
  it("works", () => {
    assert.isTrue(is.MD5("d94f3f016ae679c3008de268209132f2"));
    assert.isFalse(is.MD5("KYT0bf1c35032a71a14c2f719e5a14c1"));
  });
});
