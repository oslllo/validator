"use strict";

module.exports = {
  diff: true,
  extension: ["js"],
  package: "./package.json",
  reporter: "spec",
  slow: 30000,
  timeout: 5000,
  ui: "bdd",
  "watch-files": ["test/*.test.js"],
  "watch-ignore": ["node_modules"],
};
