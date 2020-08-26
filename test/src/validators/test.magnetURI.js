"use strict";

const { is, assert } = require("../helper");

describe("is.magnetURI", () => {
    it("works", () => {
        assert.isTrue(
            is.magnetURI(
                "magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce"
            )
        );
        assert.isFalse(
            is.magnetURI(
                ":?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce"
            )
        );
    });
});
