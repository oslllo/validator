"use strict";

const { is, assert } = require("../helper");

describe("is.float", () => {
    it("works", () => {
        assert.isTrue(is.float(123.0));
    });
    it("works with arguments", () => {
        assert.isTrue(is.float(0.123, { locale: "en-AU" }));
        assert.isFalse(is.float("123,123", { locale: "en-AU" }));
    });
});
