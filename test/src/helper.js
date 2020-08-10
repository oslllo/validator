"use strict";

const is = require("../../");
const { assert } = require("chai");

const type = function (value) {
	return Object.prototype.toString
		.call(value)
		.split(" ")[1]
		.replace("]", "")
		.toLowerCase();
};

const inputs = {
	type: function (arg, strict = false) {
		arg = arg.toLowerCase();
		return this.data.filter((value) => {
			var type;
			if (!value.hasOwnProperty("data")) {
				throw new Error(
					`${value.name} input does not have the 'data' property`
				);
			}
			var data = value.data;
			if (strict) {
				type = type(data);
			} else {
				type = typeof data;
			}
			if (type === arg) {
				return true;
			} else {
				return false;
			}
		});
	},
	check: function (data) {
		if (!Array.isArray(data)) {
			throw new TypeError(`data should be an array, ${typeof data} given`);
		}
		data.forEach((value) => {
			if (this.data.filter((o) => o.name === value).length === 0) {
				throw new TypeError(`${value} is not part of the test data`);
			}
		});
	},
	// get valid input object
	valid: function (data) {
		this.check(data);
		return this.data.filter((input) => {
			switch (true) {
				case data.includes(input.name):
					return true;
					break;
			}
		});
	},
	// get invalid input objects
	invalid: function (data) {
		this.check(data);
		return this.data.filter((input) => {
			switch (true) {
				case data.includes(input.name):
					return false;
					break;
				default:
					return true;
			}
		});
	},
	data: [
		//! FUNCTION
		{
			name: "function () {}",
			data: function () {},
			description: "(function) function () {}",
		},
		//! ERROR
		{
			name: "Error('foo')",
			data: Error("foo"),
			description: "(error) Error('foo')",
		},
		//! BOOLEANS
		{
			name: "true",
			data: true,
			description: "(boolean) true",
		},
		{
			name: "false",
			data: false,
			description: "(boolean) false",
		},
		//! BIGINTS
		{
			name: "Function('return 42n')()",
			data: Function('return 42n')(),
			description: "(bigint) Function('return 42n')()",
		},
		{
			name: "BigInt(42)",
			data: BigInt(42),
			description: "(bigint) BigInt(42)",
		},
		//! NUMBERS
		{
			name: "0",
			data: 0,
			description: "(number) 0",
		},
		{
			name: "1",
			data: 1,
			description: "(number) 1",
		},
		{
			name: "2",
			data: 2,
			description: "(number) 2",
		},
		{
			name: "1.1",
			data: 1.1,
			description: "(number) 1.1",
		},
		{
			name: "0 / 1",
			data: 0 / 1,
			description: "(number) 0 / 1 [0]",
		},
		{
			name: "0 / -1",
			data: 0 / -1,
			description: "(number) 0 / -1 [-0]",
		},
		{
			name: "NaN",
			data: NaN,
			description: "(number) NaN",
		},
		{
			name: "Infinity",
			data: Infinity,
			description: "(number) Infinity",
		},
		{
			name: "-Infinity",
			data: -Infinity,
			description: "(number) -Infinity",
		},
		//! DATE
		{
			name: "new Date()",
			data: new Date(),
			description: "(object) new Date()",
		},
		//! OBJECTS
		{
			name: "{}",
			data: {},
			description: "(object) {}",
		},
		{
			name: "null",
			data: null,
			description: "(object) null",
		},
		{
			name: "Object(42)",
			data: Object(42),
			description: "(object) Object(42)",
		},
		{
			name: "Object('')",
			data: Object(""),
			description: "(object) Object('')",
		},
		{
			name: "{ a: 1 }",
			data: { a: 1 },
			description: "(object) { a: 1 }",
		},
		{
			name: "Object(true)",
			data: Object(true),
			description: "(object) Object(true)",
		},
		{
			name: "Object(false)",
			data: Object(false),
			description: "(object) Object(false)",
		},
		//! ARGUMENTS
		{
			name: "arguments",
			data: (function (arg) {
				return arguments;
			})(1),
			description: "(arguments) REAL",
		},
		{
			name: "arguments (empty)",
			data: (function () {
				return arguments;
			})(),
			description: "(arguments) EMPTY",
		},
		{
			name: "arguments (fake)",
			data: {
				callee: function () {},
				length: 3,
			},
			description: "(arguments) FAKE / OLD SCHOOL",
		},
		//! STRINGS
		{
			name: "''",
			data: "",
			description: "(string) ''",
		},
		{
			name: "'abc'",
			data: "abc",
			description: "(string) 'abc'",
		},
		//! UNDEFINED
		{
			name: "undefined",
			data: undefined,
			description: "(undefined)",
		},
		//! ARRAY
		{
			name: "sliced arguments",
			data: (function (arg) {
				return Array.prototype.slice.call(arguments);
			})(1),
			description: "(array) sliced arguments",
		},
		{
			name: "sliced arguments (empty)",
			data: (function () {
				return Array.prototype.slice.call(arguments);
			})(),
			description: "(array) sliced arguments EMPTY",
		},
		{
			name: "[]",
			data: [],
			description: "(array) []",
		},
		{
			name: "[1, 2, 3]",
			data: [1, 2, 3],
			description: "(array) [1, 2, 3]",
		},
		{
			name: "[3, 2, 1]",
			data: [3, 2, 1],
			description: "(array) [3, 2, 1]",
		},
		{
			name: "['a', 'b', 'c']",
			data: ["a", "b", "c"],
			description: "(array) ['a', 'b', 'c']",
		},
		//! REGULAR EXPRESSION
		{
			name: "/a/g",
			data: /a/g,
			description: "(reg expression) /a/g",
		},
		{
			name: "new RegExp('a', 'g')",
			data: new RegExp('a', 'g'),
			description: "(reg expression) new RegExp('a', 'g')",
		},
	],
};

module.exports = {
	is,
	assert,
	inputs,
	type,
};
