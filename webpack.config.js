// webpack.config.js
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        index: path.join(__dirname, '/build/')
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, '/dist'),
        library: 'tinyStack',
        libraryTarget: 'umd',
        umdNamedDefine: false
    },
    plugins: [
        new webpack.BannerPlugin('Created by lqm\nGitHub: https://github.com/luqimin/tinystack\nContact: lqm@outlook.com', {
            entryOnly: true
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    babel: {
        presets: ['es2015']
    }
};