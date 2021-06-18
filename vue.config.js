const path = require("path");
const package = require("./package.json");
const webpack = require("webpack");



module.exports = {
    pages: {
        index: {
            entry: "src/main.ts"
        }
    },
    runtimeCompiler: true
}