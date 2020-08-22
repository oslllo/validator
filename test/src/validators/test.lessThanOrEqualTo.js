"use strict";

const { is, assert } = require("../helper");

describe("is.lessThanOrEqualTo", () => {
	//! TRUE
	it(`can validate that 2 is lesser than or equal to 3`, () => {
		assert.isTrue(is.lessThanOrEqualTo(2, 3));
	});
	it(`can validate that a is lesser than or equal to abc`, () => {
		assert.isTrue(is.lessThanOrEqualTo("a", "abc"));
	});
    it(`can validate that 3 is lesser than or equal to 3`, () => {
		assert.isTrue(is.lessThanOrEqualTo(3, 3));
    });
    it(`can validate that abc is lesser than or equal to abc`, () => {
		assert.isTrue(is.lessThanOrEqualTo("abc", "abc"));
	});
    //! FALSE
    it(`can validate that Infinity is NOT lesser than or equal to anything`, () => {
		assert.isFalse(is.lessThanOrEqualTo(Infinity, 0));
	});
	it(`can validate that anything is NOT lesser than or equal to Infinity`, () => {
		assert.isFalse(is.lessThanOrEqualTo(0, Infinity));
    });
	it(`can validate that 3 is NOT lesser than or equal to 2`, () => {
		assert.isFalse(is.lessThanOrEqualTo(3, 2));
	});
	it(`can validate that abc is NOT lesser than or equal to a`, () => {
		assert.isFalse(is.lessThanOrEqualTo("abc", "a"));
	});
	//! THROWS
	it(`throws when first argument is NaN`, () => {
		assert.throws(() => is.lessThanOrEqualTo(NaN, 2), TypeError);
	});
	it(`throws when second argument is NaN`, () => {
		assert.throws(() => is.lessThanOrEqualTo(2, NaN), TypeError);
	});
});
