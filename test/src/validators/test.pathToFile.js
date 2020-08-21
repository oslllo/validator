"use strict";

const fs = require("fs");
const path = require("path");
const { is, assert, inputs } = require("../helper");

describe("is.pathToFile", () => {
	var valid = [
		"test/src/validators/test.pathToFile.js",
		path.resolve("test/src/validators/test.pathToFile.js"),
	];
	valid.forEach((p) => {
		it(`can validate that ${p} is a path to a file`, () => {
			assert.isTrue(fs.existsSync(p), `the path ${p} does not exist`);
			assert.isTrue(is.pathToFile(p));
		});
	});
	var invalid = ["test/src/validators", path.resolve("test/src/validators")];
	invalid.forEach((p) => {
		it(`can validate that ${p} is NOT a path to a file`, () => {
			assert.isTrue(fs.existsSync(p), `the path ${p} does not exist`);
			assert.isFalse(is.pathToFile(p));
		});
	});
});
