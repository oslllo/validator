"use strict";

const { is, assert } = require("../helper");

describe("is.mongoId", () => {
    it("works", () => {
        assert.isTrue(is.mongoId("507f1f77bcf86cd799439011"));
        assert.isFalse(is.mongoId("507f1f77bcf86cd7994390"));
    });
});
