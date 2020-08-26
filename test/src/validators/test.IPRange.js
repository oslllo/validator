"use strict";

const { is, assert } = require("../helper");

describe("is.IPRange", () => {
    it("works", () => {
        assert.isTrue(is.IPRange("127.0.0.1/24"));
    });
});
