"use strict";

const { is, assert } = require("../helper");

describe("is.string", () => {
  const validCases = [
    { description: "empty primitive string", data: "" },
    { description: "normal primitive string", data: "abc" },
    { description: "string with spaces", data: "   " },
    { description: "template literal", data: `templ-${1}` },
    { description: "numeric-looking string", data: "123" },
    { description: "String(...) factory returns primitive", data: String("xyz") },
    /*eslint no-new-wrappers: "off" */
    { description: "String object (boxed)", data: new String("boxed") },
    { description: "empty String object (boxed)", data: new String("") },
  ];

  const invalidCases = [
    { description: "number", data: 123 },
    { description: "0", data: 0 },
    { description: "NaN", data: NaN },
    { description: "boolean true", data: true },
    { description: "boolean false", data: false },
    { description: "null", data: null },
    { description: "undefined", data: undefined },
    { description: "plain object", data: { a: 1 } },
    { description: "array", data: [1, 2, 3] },
    { description: "function", data: function () {} },
    { description: "arrow function", data: () => {} },
    { description: "symbol", data: Symbol("s") },
    { description: "Date", data: new Date() },
    { description: "RegExp", data: /abc/ },
    { description: "Buffer (node)", data: Buffer.from("abc") },
  ];

  validCases.forEach(({ description, data }) => {
    it(`returns true for ${description}`, () => {
      assert.isTrue(is.string(data));
    });
  });

  invalidCases.forEach(({ description, data }) => {
    it(`returns false for ${description}`, () => {
      assert.isFalse(is.string(data));
    });
  });

  it("returns false for object with toString() that returns a string (should not coerce)", () => {
    const obj = {
      toString: function () {
        return "i look like a string";
      },
    };
    assert.isFalse(is.string(obj));
  });

  it("does not treat boolean-string-like values as strings when they are not (sanity)", () => {
    assert.isTrue(is.string("true"));
    assert.isFalse(is.string(true));
  });
});
