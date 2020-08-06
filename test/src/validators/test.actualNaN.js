const is = require("../../../");
const { assert } = require("chai");

it("works", () => {
    assert.isTrue(is.actualNaN(NaN));
    assert.isFalse(is.after(new Date().toDateString()));
    assert.isTrue(is.arrayLike([]))
});
