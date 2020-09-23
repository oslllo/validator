"use strict";

const fs = require("fs");
const jsdoc2md = require("jsdoc-to-markdown");

const docs = jsdoc2md.renderSync({
    files: "src/validators/*.js",
    "global-index-format": "none",
    "heading-depth": 3,
    separators: true,
});
var header = fs.readFileSync("docs/.internal/validators/header.md", "utf-8");
fs.writeFileSync("docs/getting-started/basic-usage/validators.md", header + docs);
