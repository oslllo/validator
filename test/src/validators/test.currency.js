"use strict";

const { is, assert } = require("../helper");

describe("is.currency", () => {
    it("works", () => {
        assert.isTrue(is.currency("-$10,123.45"));
        assert.isFalse(is.currency("$1.1"));
    });
    it("works with arguments", () => {
        assert.isTrue(
            is.currency("-$10,123", {
                allow_decimal: false,
            })
        );
        assert.isFalse(
            is.currency("'-$10,123.45", {
                allow_decimal: false,
            })
        );
    });
});
