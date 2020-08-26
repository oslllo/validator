"use strict";

const { is, assert } = require("../helper");

describe("is.IMEI", () => {
    it("works", () => {
        assert.isTrue(is.IMEI("352099001761481"));
    });
    it("works with arguments", () => {
        assert.isTrue(
            is.IMEI("35-209900-176148-1", { allow_hyphens: true })
        );
        assert.isFalse(
            is.IMEI("49-015420-323751-7", { allow_hyphens: true })
        );
    });
});
