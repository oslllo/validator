"use strict";

const { is, assert } = require("../helper");

describe("is.maximun", () => {
    //! TRUE
    it("can validate that 3 is maximum of [3,2,1]", () => {
        assert.isTrue(is.maximum(3, [3, 2, 1]));
    });
    it("can validate that 3 is maximum of [1,2,3]", () => {
        assert.isTrue(is.maximum(3, [1, 2, 3]));
    });
    it("can validate that 4 is maximum of [1,2,3]", () => {
        assert.isTrue(is.maximum(3, [1, 2, 3]));
    });
    it("can validate that c is maximum of [a,b,c]", () => {
        assert.isTrue(is.maximum("c", ["a", "b", "c"]));
    });
    //! FALSE
    it("can validate that b is NOT maximum of [a,b,c]", () => {
        assert.isFalse(is.maximum("b", ["a", "b", "c"]));
    });
    it("can validate that 2 is NOT maximum of [1,2,3]", () => {
        assert.isFalse(is.maximum(2, [1, 2, 3]));
    });
    //! THROWS
    it("throws if first argument is NaN", () => {
        assert.throws(() => is.maximum(NaN), TypeError);
    });
    it("throws if second argument is not array-like", () => {
        assert.throws(() => is.maximum(1, null), TypeError);
        assert.throws(() => is.maximum(1, {}), TypeError);
    });
});
