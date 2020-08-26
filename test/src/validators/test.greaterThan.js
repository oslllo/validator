"use strict";

const { is, assert } = require("../helper");

describe("is.greaterThan", () => {
    //! TRUE
    it("can validate that 3 is greater than 2", () => {
        assert.isTrue(is.greaterThan(3, 2));
    });
    it("can validate that abc is greater than a", () => {
        assert.isTrue(is.greaterThan("abc", "a"));
    });
    //! FALSE
    it("can validate that 3 is NOT greater than 3", () => {
        assert.isFalse(is.greaterThan(3, 3));
    });
    it("can validate that 2 is NOT greater than 3", () => {
        assert.isFalse(is.greaterThan(2, 3));
    });
    it("can validate that 3 is NOT greater than 3", () => {
        assert.isFalse(is.greaterThan(3, 3));
    });
    it("can validate that abc is NOT greater than abc", () => {
        assert.isFalse(is.greaterThan("abc", "abc"));
    });
    it("can validate that a is NOT greater than abc", () => {
        assert.isFalse(is.greaterThan("a", "abc"));
    });
    it("can validate that Infinity is NOT greater than anything", () => {
        assert.isFalse(is.greaterThan(Infinity, 0));
    });
    it("can validate that anything is NOT greater than Infinity", () => {
        assert.isFalse(is.greaterThan(0, Infinity));
    });
    //! THROWS
    it("throws when first argument is NaN", () => {
        assert.throws(() => is.greaterThan(NaN, 2), TypeError);
    });
    it("throws when second argument is NaN", () => {
        assert.throws(() => is.greaterThan(2, NaN), TypeError);
    });
});
