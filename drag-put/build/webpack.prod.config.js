'use strict';
const { resolve } = require('./utils');
const pkg = require('../package.json');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const getEntry = require('./entry');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    entry: getEntry(true),
    mode: 'production',
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: pkg.version + '/[name].js?v=[hash:7]'
    },
    performance: {
        hints: false // 取消性能warning提示
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':  {
                NODE_ENV: '"production"'
            }
        }),
    ]
});