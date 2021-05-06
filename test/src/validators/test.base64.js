"use strict";

const { is, assert } = require("../helper");

describe("is.base64", () => {
  it("works", () => {
    assert.isTrue(
      is.base64(
        "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4="
      )
    );
    assert.isFalse(is.base64("12345"));
  });
  it("works with arguments", () => {
    assert.isTrue(
      is.base64(
        "bGFkaWVzIGFuZCBnZW50bGVtZW4sIHdlIGFyZSBmbG9hdGluZyBpbiBzcGFjZQ",
        { urlSafe: true }
      )
    );
    assert.isFalse(is.base64("This+isa/bad+base64Url==", { urlSafe: true }));
  });
});
