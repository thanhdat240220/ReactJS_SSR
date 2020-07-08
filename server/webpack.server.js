const path = require('path');
const merge = require('webpack-merge');
const base_webpack_config = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(base_webpack_config, config);