"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.arrayLike", () => {
	it(`can validate that undefined is NOT array-like`, () => {
		assert.isFalse(is.arrayLike());
		assert.isFalse(is.arrayLike(undefined));
	});
	it(`can validate that null is NOT array-like`, () => {
		assert.isFalse(is.arrayLike(null));
	});
	it(`can validate that false is NOT array-like`, () => {
		assert.isFalse(is.arrayLike(false));
	});
	it(`can validate that true is NOT array-like`, () => {
		assert.isFalse(is.arrayLike(true));
    });
    it(`can validate that object with negative length is NOT array-like`, () => {
		assert.isFalse(is.arrayLike({ length: -1 }));
    });
    it(`can validate that object with NaN length is NOT array-like`, () => {
		assert.isFalse(is.arrayLike({ length: NaN }));
    });
    it(`can validate that object with string length is NOT array-like`, () => {
		assert.isFalse(is.arrayLike({ length: 'foo' }));
    });
    it(`can validate that object with empty string length is NOT array-like`, () => {
		assert.isFalse(is.arrayLike({ length: '' }));
    });
    
	it(`can validate that zero length is array-like`, () => {
		assert.isTrue(is.arrayLike({ length: 0 }));
	});
	it(`can validate that positive length is array-like`, () => {
		assert.isTrue(is.arrayLike({ length: 1 }));
	});
	it(`can validate that array is array-like`, () => {
		assert.isTrue(is.arrayLike([]));
	});
	it(`can validate that empty arguments are array-like`, () => {
		(function () {
			assert.isTrue(is.arrayLike(arguments));
		})();
    });
    it(`can validate that nonempty arguments are array-like`, () => {
		(function (arg1, arg2, arg3) {
			assert.isTrue(is.arrayLike(arguments));
		})(1, 2, 3);
	});
});
