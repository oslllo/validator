"use strict";

const path = require("path");
const pkg = require("./package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(pkg.main),
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: ["!oslllo-validator.js"],
    }),
  ],
  output: {
    library: "is",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "build"),
  },
};
