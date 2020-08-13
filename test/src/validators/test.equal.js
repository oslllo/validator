"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.equal", () => {
	describe("premitives", () => {
		var data = [
			"true",
			"false",
			"undefined",
			"null",
			"''",
			"'abc'",
			"0",
			"Infinity",
			"-Infinity",
		];
		inputs.valid(data).forEach((valid) => {
			it(`can validate that ${valid.description} primitive is equal to itself`, () => {
				assert.isTrue(is.equal(valid.data, valid.data));
			});
		});
	});
	describe("arrays", () => {
		it(`can equal array to itself`, () => {
			var arr = [1, 2];
			assert.isTrue(is.equal(arr, arr));
		});
		it(`can equal empty arrays`, () => {
			assert.isTrue(is.equal([], []));
		});
		it(`can equal shallow arrays`, () => {
			assert.isTrue(is.equal([1, 2, 3], [1, 2, 3]));
		});
		it(`can equal deep arrays`, () => {
			assert.isTrue(is.equal([1, 2, [3, 4]], [1, 2, [3, 4]]));
		});
		it(`will not equal inequal arrays`, () => {
			assert.isFalse(is.equal([1, 2, 3], [5, 2, 3]));
		});
		it(`will not equal inequal arrays (2)`, () => {
			assert.isFalse(is.equal([1, 2], [2, 3]));
		});
		it(`will not equal inequal arrays (3)`, () => {
			assert.isFalse(is.equal([1, 2, 3], [2, 3]));
		});
		it(`will not equal deep inequal arrays`, () => {
			assert.isFalse(is.equal([1, 2, [3, 4]], [1, 2, [3, 5]]));
		});
	});
	describe("dates", () => {
		it(`can equal two equal date objects`, () => {
			var now = new Date();
			assert.isTrue(is.equal(now, new Date(now.getTime())));
		});
		it(`will not equal two inequal date objects`, (done) => {
			var now = new Date();
			setTimeout(() => {
				assert.isFalse(is.equal(now, new Date()));
				done();
			}, 10);
		});
	});
	describe("object instances", () => {
		var F = function F() {
			this.foo = "bar";
		};
		F.prototype = {};
		var G = function G() {
			this.foo = "bar";
		};
		var f = new F();
		var g = new G();
		it(`will equal same object instances`, () => {
			assert.isTrue(is.equal(f, f));
		});
		it(`will equal two object instances when the prototype and props are the same`, () => {
			assert.isTrue(is.equal(f, new F()));
		});
		it(`will equal two object instances when the prototype is not the same but props are`, () => {
			assert.isTrue(is.equal(f, new G()));
		});
		g.bar = "baz";
		it(`will not equal object instances when the prototype and props are not the same`, () => {
			assert.isFalse(is.equal(f, g));
		});
		it(`will not equal object instances when the prototype and props are not the same (2)`, () => {
			assert.isFalse(is.equal(g, f));
		});
	});
	describe("function", () => {
		var func1 = function () {};
		var func2 = function () {};
		it(`can validate that the same function is equal to itself`, () => {
			assert.isTrue(is.equal(func1, func1));
		});
		it(`can validate that functions that look the same are are declared at diffrent times are NOT equal`, () => {
			assert.isFalse(is.equal(func1, func2));
		});
	});
});
