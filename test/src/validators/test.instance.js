"use strict";

const { is, assert } = require("../helper");

describe("is.instance", () => {
	it(`can validate that new Date is instanceof Date`, () => {
		assert.isTrue(is.instance(new Date(), Date));
    });
    it(`can validate that new constructor is instanceof constructor`, () => {
        var F = function () {};
		assert.isTrue(is.instance(new F(), F));
	});
});
