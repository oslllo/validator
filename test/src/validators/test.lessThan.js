"use strict";

const { is, assert } = require("../helper");

describe("is.lessThan", () => {
	//! TRUE
	it(`can validate that 2 is lesser than 3`, () => {
		assert.isTrue(is.lessThan(2, 3));
	});
	it(`can validate that a is lesser than abc`, () => {
		assert.isTrue(is.lessThan("a", "abc"));
	});
    //! FALSE
    it(`can validate that 3 is NOT lesser than 3`, () => {
		assert.isFalse(is.lessThan(3, 3));
    });
    it(`can validate that abc is NOT lesser than abc`, () => {
		assert.isFalse(is.lessThan("abc", "abc"));
	});
    it(`can validate that Infinity is NOT lesser than anything`, () => {
		assert.isFalse(is.lessThan(Infinity, 0));
	});
	it(`can validate that anything is NOT lesser than Infinity`, () => {
		assert.isFalse(is.lessThan(0, Infinity));
    });
	it(`can validate that 3 is NOT lesser than 2`, () => {
		assert.isFalse(is.lessThan(3, 2));
	});
	it(`can validate that abc is NOT lesser than a`, () => {
		assert.isFalse(is.lessThan("abc", "a"));
	});
	//! THROWS
	it(`throws when first argument is NaN`, () => {
		assert.throws(() => is.lessThan(NaN, 2), TypeError);
	});
	it(`throws when second argument is NaN`, () => {
		assert.throws(() => is.lessThan(2, NaN), TypeError);
	});
});
