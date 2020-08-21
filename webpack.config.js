const path = require("path");

module.exports = {
	mode: "production",
	entry: "./dist/node/index.js",
	output: {
		library: "is",
		filename: "is.js",
		libraryTarget: "umd",
		path: path.resolve(__dirname, "dist/browser"),
	},
};
