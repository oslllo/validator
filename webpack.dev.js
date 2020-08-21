const pkg = require("./package.json");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: `${pkg.name}.js`
    },
	devServer: {
		contentBase: "./dist/browser",
	},
});
