"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.minimum", () => {
	//! TRUE
	it(`can validate that 1 is minimum of [3,2,1]`, () => {
		assert.isTrue(is.minimum(1, [3, 2, 1]));
	});
	it(`can validate that 0 is minimum of [1,2,3]`, () => {
		assert.isTrue(is.minimum(0, [1, 2, 3]));
	});
	it(`can validate that a is minimum of [a,b,c]`, () => {
		assert.isTrue(is.minimum("a", ["a", "b", "c"]));
	});
	//! FALSE
	it(`can validate that c is NOT minimum of [a,b,c]`, () => {
		assert.isFalse(is.minimum("c", ["a", "b", "c"]));
	});
	it(`can validate that 2 is NOT minimum of [1,2,3]`, () => {
		assert.isFalse(is.minimum(2, [1, 2, 3]));
	});
	//! THROWS
	it(`throws if first argument is NaN`, () => {
		assert.throws(() => is.minimum(NaN), TypeError);
	});
	it(`throws if second argument is not array-like`, () => {
		assert.throws(() => is.minimum(1, null), TypeError);
		assert.throws(() => is.minimum(1, {}), TypeError);
	});
});
