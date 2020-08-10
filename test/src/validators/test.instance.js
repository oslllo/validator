"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.instance", () => {
	it(`can tell that new Date is instanceof Date`, () => {
		assert.isTrue(is.instance(new Date(), Date));
    });
    it(`can tell that new constructor is instanceof constructor`, () => {
        var F = function () {};
		assert.isTrue(is.instance(new F(), F));
	});
});
