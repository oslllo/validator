"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.objectLiteral", () => {
	var data = ["{}", "{ a: 1 }", "arguments (fake)"];
	inputs.valid(data).forEach((valid) => {
		it(`can validate that ${valid.description} is an object literal`, () => {
			assert.isTrue(is.objectLiteral(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can validate that ${invalid.description} is NOT an object literal`, () => {
			assert.isFalse(is.objectLiteral(invalid.data));
		});
	});
	if (typeof module !== "undefined") {
		describe("commonJS", () => {
			it(`can validate that module.exports is a hash`, () => {
				assert.isTrue(is.objectLiteral(module.exports));
			});
		});
	}
	if (typeof window !== "undefined") {
		describe("browser", () => {
			it(`it can validate that window is not a hash`, () => {
				assert.isFalse(is.objectLiteral(window));
			});
			it(`it can validate that element is not a hash`, () => {
				assert.isFalse(is.objectLiteral(document.createElement("div")));
			});
		});
	}
	if (typeof process !== "undefined") {
		describe("node", () => {
			it(`it can validate that global is not a hash`, () => {
				assert.isFalse(is.objectLiteral(global));
			});
			it(`it can validate that process is not a hash`, () => {
				assert.isFalse(is.objectLiteral(process));
			});
		});
	}
});
