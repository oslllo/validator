"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.null", () => {
    var data = ["null"];
    inputs.valid(data).forEach((valid) => {
        it(`can tell that ${valid.description} is null`, () => {
            assert.isTrue(is.null(valid.data));
        });
    });
    inputs.invalid(data).forEach((invalid) => {
        it(`can tell that ${invalid.description} is NOT null`, () => {
            assert.isFalse(is.null(invalid.data));
        });
    });
});
