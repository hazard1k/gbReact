const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'bundle.js',
        //publicPath: '/static/build/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    '@babel/env', ['@babel/preset-react', {
                        runtime: 'automatic'
                    }]
                ],
                plugins: [
                    [
                        '@babel/plugin-proposal-class-properties',
                        { loose: true },
                    ]
                ],
            }
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'React App',
        template: 'index.html'
    })],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map',
};