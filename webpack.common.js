"use strict";

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		app: "./dist/node/index.js",
	},
	plugins: [
		new CleanWebpackPlugin({
			dry: false,
			cleanOnceBeforeBuildPatterns: [
				"!oslllo-validator.js",
				"!oslllo-validator.min.js",
			],
		}),
	],
	output: {
		library: "is",
		libraryTarget: "umd",
		path: path.resolve(__dirname, "dist/browser"),
	},
};
