"use strict";

const { is, assert, inputs } = require("../helper");

describe("divisibleBy", () => {
    //! TRUE
	it(`can tell that 4 is divisible by 2`, () => {
		assert.isTrue(is.divisibleBy(4, 2));
	});
	it(`can tell that 0 is divisible by 1`, () => {
		assert.isTrue(is.divisibleBy(0, 1));
	});
	it(`can tell that Infinity is divisible by anything`, () => {
		assert.isTrue(is.divisibleBy(Infinity, 1));
	});
	it(`can tell that anything is divisible by Infinity`, () => {
		assert.isTrue(is.divisibleBy(1, Infinity));
    });
    //! FALSE
    it(`can tell that 1 is not divisible by 0`, () => {
		assert.isFalse(is.divisibleBy(1, 0));
    });
    it(`can tell that NaN is not divisible by 1`, () => {
		assert.isFalse(is.divisibleBy(NaN, 1));
    });
    it(`can tell that 1 is not divisible by NaN`, () => {
		assert.isFalse(is.divisibleBy(1, NaN));
    });
    it(`can tell that NaN is not divisible by NaN`, () => {
		assert.isFalse(is.divisibleBy(NaN, NaN));
    });
    it(`can tell that 1 is not divisible by 3`, () => {
		assert.isFalse(is.divisibleBy(1, 3));
    });
});
