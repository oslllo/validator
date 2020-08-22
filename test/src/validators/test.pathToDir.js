"use strict";

const fs = require("fs");
const path = require("path");
const { is, assert } = require("../helper");

describe("is.pathToDir", () => {
    var valid = ["test/src/validators", path.resolve("test/src/validators")];
    valid.forEach((p) => {
        it(`can validate that ${p} is a path to a file`, () => {
            assert.isTrue(fs.existsSync(p), `the path ${p} does not exist`);
            assert.isTrue(is.pathToDir(p));
        });
    });
    var invalid = [
        "test/src/validators/test.pathToDir.js",
        path.resolve("test/src/validators/test.pathToDir.js"),
    ];
    invalid.forEach((p) => {
        it(`can validate that ${p} is NOT a path to a file`, () => {
            assert.isTrue(fs.existsSync(p), `the path ${p} does not exist`);
            assert.isFalse(is.pathToDir(p));
        });
    });
});
