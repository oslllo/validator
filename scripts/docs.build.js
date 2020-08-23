"use strict";

const fs = require("fs");
const jsdoc2md = require("jsdoc-to-markdown");

const docs = jsdoc2md.renderSync({
    files: "src/validators/*.js",
    "global-index-format": "none",
    "heading-depth": 3,
    separators: true,
});
fs.writeFileSync("docs/.internal/validators.md", docs);
