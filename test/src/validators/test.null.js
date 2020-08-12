"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.null", () => {
    var data = ["null"];
    inputs.valid(data).forEach((valid) => {
        it(`can validate that ${valid.description} is null`, () => {
            assert.isTrue(is.null(valid.data));
        });
    });
    inputs.invalid(data).forEach((invalid) => {
        it(`can validate that ${invalid.description} is NOT null`, () => {
            assert.isFalse(is.null(invalid.data));
        });
    });
});
