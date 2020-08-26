"use strict";

const { is, assert, inputs } = require("../helper");

describe("integer", () => {
    var data = ["0", "1"];
    inputs.valid(data).forEach((valid) => {
        it(`can validate that ${valid.description} is an integer`, () => {
            assert.isTrue(is.integer(valid.data));
        });
    });
});
