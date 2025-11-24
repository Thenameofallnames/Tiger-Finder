const { watch } = require('fs');
const path = require('path');
const { Template } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: '/src/pack.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            Template: './src/index.html'
        })
    ],
    }