"use strict";

var fs, env, window, document, DOM, JSDOM;

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
	var { JSDOM } = require("jsdom");
	var DOM = new JSDOM(`<!DOCTYPE html></html>`);
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
