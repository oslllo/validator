"use strict";

var fs, window, document, DOM, JSDOM;

const isBrowser =
	typeof window !== "undefined" && typeof window.document !== "undefined";

const isNode =
	typeof process !== "undefined" &&
	process.versions != null &&
	process.versions.node != null;

/**
 * Try to detect webpack and node
 */
if (typeof process.env.NODE_ENV === "undefined" && isNode && !isBrowser) {
	fs = require("fs");
	JSDOM = require("jsdom").JSDOM;
	DOM = new JSDOM(`<!DOCTYPE html></html>`);
	window = DOM.window;
} else {
	window = global.window;
}

document = window.document;

module.exports = {
	fs: fs,
	DOM: DOM,
	JSDOM: JSDOM,
	window: window,
	document: document,
};
