"use strict";

const { JSDOM } = require("jsdom");
const { assert } = require("../helper");

var is, window;

before((done) => {
    var options = { runScripts: "dangerously", resources: "usable" };
    JSDOM.fromFile("test/src/env/test.html", options)
        .then((dom) => {
            dom.window.document.addEventListener("DOMContentLoaded", () => {
                setImmediate(() => {
                    window = dom.window;
                    is = window.is;
                    done();
                });
            });
        })
        .catch((err) => {
            process.stderr.write(`${err.message}\n`);
            /*eslint no-process-exit: "off", no-magic-numbers: "off" */
            process.exit(1);
        });
});

describe("test.browser", () => {
    it("loads validator into DOM", () => {
        assert.isTrue(typeof is !== "undefined", "validator was not loaded into the DOM");
        assert.isTrue(typeof is === "object", "validator is not an object");
    });
    it("can validate stuff in DOM", () => {
        assert.isTrue(is.string("123"));
        assert.isTrue(is.fn(window.alert));
        assert.isTrue(is.element(window.document.createElement("div")));
    });
});
