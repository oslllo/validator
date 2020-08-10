"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.arrayLike", () => {
	it(`can tell that undefined is NOT array-like`, () => {
		assert.isFalse(is.arrayLike());
		assert.isFalse(is.arrayLike(undefined));
	});
	it(`can tell that null is NOT array-like`, () => {
		assert.isFalse(is.arrayLike(null));
	});
	it(`can tell that false is NOT array-like`, () => {
		assert.isFalse(is.arrayLike(false));
	});
	it(`can tell that true is NOT array-like`, () => {
		assert.isFalse(is.arrayLike(true));
    });
    it(`can tell that object with negative length is NOT array-like`, () => {
		assert.isFalse(is.arrayLike({ length: -1 }));
    });
    it(`can tell that object with NaN length is NOT array-like`, () => {
		assert.isFalse(is.arrayLike({ length: NaN }));
    });
    it(`can tell that object with string length is NOT array-like`, () => {
		assert.isFalse(is.arrayLike({ length: 'foo' }));
    });
    it(`can tell that object with empty string length is NOT array-like`, () => {
		assert.isFalse(is.arrayLike({ length: '' }));
    });
    
	it(`can tell that zero length is array-like`, () => {
		assert.isTrue(is.arrayLike({ length: 0 }));
	});
	it(`can tell that positive length is array-like`, () => {
		assert.isTrue(is.arrayLike({ length: 1 }));
	});
	it(`can tell that array is array-like`, () => {
		assert.isTrue(is.arrayLike([]));
	});
	it(`can tell that empty arguments are array-like`, () => {
		(function () {
			assert.isTrue(is.arrayLike(arguments));
		})();
    });
    it(`can tell that nonempty arguments are array-like`, () => {
		(function (arg1, arg2, arg3) {
			assert.isTrue(is.arrayLike(arguments));
		})(1, 2, 3);
	});
});
