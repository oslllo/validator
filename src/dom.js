"use strict";

if (typeof window === "undefined") {
	const { JSDOM } = require("jsdom");
	let dom = new JSDOM(`<!DOCTYPE html></html>`);
	var window = dom.window;
	var document = window.document;
}

module.exports = {
	window: window,
	document: document,
	JSDOM: (() => {
		if (typeof JSDOM === "undefined") {
			return undefined;
		}
		return JSDOM;
	})(),
};
