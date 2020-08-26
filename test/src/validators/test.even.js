"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.even", () => {
    var data = [
        "0",
        "2",
        "0 / 1",
        "0 / -1",
        "Object(42)",
        "Infinity",
        "-Infinity",
    ];
    inputs.valid(data).forEach((valid) => {
        it(`can validate that ${valid.description} is even`, () => {
            assert.isTrue(is.even(valid.data));
        });
    });
    inputs.invalid(data).forEach((invalid) => {
        it(`can validate that ${invalid.description} is NOT even`, () => {
            assert.isFalse(is.even(invalid.data));
        });
    });
});
