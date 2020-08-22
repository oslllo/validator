"use strict";

const pkg = require("./package.json");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: `${pkg.name}.min.js`,
	},
});
