"use strict";

const { is, assert } = require("../helper");

describe("is.dataURI", () => {
  it("works", () => {
    assert.isTrue(is.dataURI("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC"));
    assert.isFalse(is.dataURI("dataxbase64"));
  });
});
