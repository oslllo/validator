"use strict";

const { is, assert } = require("../helper");

describe("is.greaterThanOrEqualTo", () => {
    //! TRUE
	it(`can validate that 3 is greater than or equal to 2`, () => {
		assert.isTrue(is.greaterThanOrEqualTo(3, 2));
    });
    it(`can validate that 3 is greater than or equal to 3`, () => {
		assert.isTrue(is.greaterThanOrEqualTo(3, 3));
    });
    it(`can validate that abc is greater than or equal to a`, () => {
		assert.isTrue(is.greaterThanOrEqualTo('abc', 'a'));
    });
    it(`can validate that abc is greater than or equal to abc`, () => {
		assert.isTrue(is.greaterThanOrEqualTo('abc', 'abc'));
    });
    //! FALSE
    it(`can validate that 2 is NOT greater than or equal to 3`, () => {
		assert.isFalse(is.greaterThanOrEqualTo(2, 3));
    });
    it(`can validate that a is NOT greater than or equal to abc`, () => {
		assert.isFalse(is.greaterThanOrEqualTo('a', 'abc'));
    });
    it(`can validate that Infinity is NOT greater than or equal to anything`, () => {
		assert.isFalse(is.greaterThanOrEqualTo(Infinity, 0));
    });
    it(`can validate that anything is NOT greater than or equal to Infinity`, () => {
		assert.isFalse(is.greaterThanOrEqualTo(0, Infinity));
    });
    //! THROWS
    it(`throws when first argument is NaN`, () => {
		assert.throws(() => is.greaterThanOrEqualTo(NaN, 2), TypeError);
    });
    it(`throws when second argument is NaN`, () => {
		assert.throws(() => is.greaterThanOrEqualTo(2, NaN), TypeError);
    });
});
