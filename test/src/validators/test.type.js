"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.type", () => {
    inputs.type("boolean").forEach((valid) => {
        it(`can validate that ${valid.description} is type Boolean`, () => {
            assert.isTrue(is.type(valid.data, "boolean"));
        });
    });
    inputs.type("number").forEach((valid) => {
        it(`can validate that ${valid.description} is type Number`, () => {
            assert.isTrue(is.type(valid.data, "number"));
        });
    });
    inputs.type("object").forEach((valid) => {
        it(`can validate that ${valid.description} is type Object`, () => {
            assert.isTrue(is.type(valid.data, "object"));
        });
    });
    inputs.type("string").forEach((valid) => {
        it(`can validate that ${valid.description} is type String`, () => {
            assert.isTrue(is.type(valid.data, "string"));
        });
    });
    inputs.type("undefined").forEach((valid) => {
        it(`can validate that ${valid.description} is type Undefined`, () => {
            assert.isTrue(is.type(valid.data, "undefined"));
        });
    });
});
