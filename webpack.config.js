const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'bundle.js',
        publicPath: '/static/build/'
    },
};