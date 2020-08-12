"use strict";

const { is, assert, inputs } = require("../helper");

if (typeof Symbol === "function") {
	describe("is.symbol", () => {
		it(`can validate that Symbol("foo") is a symbol`, () => {
			assert.isTrue(is.symbol(Symbol("foo")));
		});
		var notKnownSymbols = [
			"length",
			"name",
			"arguments",
			"caller",
			"prototype",
			"for",
			"keyFor",
		];
		var symbolKeys = Object.getOwnPropertyNames(Symbol).filter(function (name) {
			return notKnownSymbols.indexOf(name) < 0;
		});
		symbolKeys.forEach((symbolKey) => {
			it(`can validate that ${symbolKey} is a symbol`, () => {
				assert.isTrue(is.symbol(Symbol[symbolKey]));
			});
		});
		notKnownSymbols.forEach((notKnownSymbolKey) => {
			if (
				notKnownSymbolKey !== "caller" &&
				notKnownSymbolKey !== "prototype" &&
				notKnownSymbolKey !== "arguments"
			) {
				it(`can validate that ${notKnownSymbolKey} is NOT a symbol`, () => {
					assert.isFalse(is.symbol(Symbol[notKnownSymbolKey]));
				});
			}
		});
		var data = [];
		inputs.invalid(data).forEach((invalid) => {
			it(`can validate that ${invalid.description} is NOT a symbol`, () => {
				assert.isFalse(is.symbol(invalid.data));
			});
		});
	});
}
