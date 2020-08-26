"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.arrayEmpty", () => {
    var data = ["sliced arguments (empty)", "[]"];
    inputs.valid(data).forEach((valid) => {
        it(`can validate that ${valid.description} is an empty array`, () => {
            assert.isTrue(is.arrayEmpty(valid.data));
        });
    });
    inputs.invalid(data).forEach((invalid) => {
        it(`can validate that ${invalid.description} is NOT an empty array`, () => {
            assert.isFalse(is.arrayEmpty(invalid.data));
        });
    });
});
