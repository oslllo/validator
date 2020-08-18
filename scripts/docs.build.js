"use strict";

const fs = require("fs");
const path = require("path");
const jsdoc2md = require("jsdoc-to-markdown");

const docs = jsdoc2md.renderSync({
	files: "src/validators/*.js",
    "global-index-format": "none",
    // "name-format": "class",
    // "module-index-format": "none",
    // "param-list-format": "list",
    // "property-list-format": "list",
	separators: true,
});
fs.writeFileSync("docs/.internal/validators.md", docs);
