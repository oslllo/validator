"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.within", () => {
	//! THROWS
	describe("throws on NaN", () => {
		it(`throws when first argument is NaN`, () => {
			assert.throws(() => is.within(NaN, 0, 0), TypeError);
		});
		it(`throws when second argument is NaN`, () => {
			assert.throws(() => is.within(0, NaN, 0), TypeError);
		});
		it(`throws when third argument is NaN`, () => {
			assert.throws(() => is.within(0, 0, NaN), TypeError);
		});
	});
	describe("throws on non-number", () => {
		it(`throws when first argument is a string`, () => {
			assert.throws(() => is.within("", 0, 0), TypeError);
		});
		it(`throws when second argument is a string`, () => {
			assert.throws(() => is.within(0, "", 0), TypeError);
		});
		it(`throws when third argument is a string`, () => {
			assert.throws(() => is.within(0, 0, ""), TypeError);
		});
		it(`throws when first argument is an object`, () => {
			assert.throws(() => is.within({}, 0, 0), TypeError);
		});
		it(`throws when second argument is an object`, () => {
			assert.throws(() => is.within(0, {}, 0), TypeError);
		});
		it(`throws when third argument is an object`, () => {
			assert.throws(() => is.within(0, 0, {}), TypeError);
		});
		it(`throws when first argument is null`, () => {
			assert.throws(() => is.within(null, 0, 0), TypeError);
		});
		it(`throws when second argument is null`, () => {
			assert.throws(() => is.within(0, null, 0), TypeError);
		});
		it(`throws when third argument is null`, () => {
			assert.throws(() => is.within(0, 0, null), TypeError);
		});
		it(`throws when first argument is undefined`, () => {
			assert.throws(() => is.within(undefined, 0, 0), TypeError);
		});
		it(`throws when second argument is undefined`, () => {
			assert.throws(() => is.within(0, undefined, 0), TypeError);
		});
		it(`throws when third argument is undefined`, () => {
			assert.throws(() => is.within(0, 0, undefined), TypeError);
		});
	});
	//! TRUE
	it(`can tell that 2 is between 1 and 3`, () => {
		assert.isTrue(is.within(2, 1, 3));
	});
	it(`can tell that 0 is between -1 and 1`, () => {
		assert.isTrue(is.within(0, -1, 1));
	});
	it(`can tell that infinity always returns true (1)`, () => {
		assert.isTrue(is.within(2, 0, Infinity));
	});
	it(`can tell that infinity always returns true (2)`, () => {
		assert.isTrue(is.within(2, Infinity, 0));
	});
	it(`can tell that infinity always returns true (3)`, () => {
		assert.isTrue(is.within(Infinity, 2, 0));
	});
	//! FALSE
	it(`can tell that 2 is not between -1 and 1`, () => {
		assert.isFalse(is.within(2, -1, 1));
	});
});
