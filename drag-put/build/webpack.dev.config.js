'use strict';
const webpack = require('webpack');
const glob = require('glob');
const PruifyCSSPlugin = require('purifycss-webpack');
const merge = require('webpack-merge');
const os = require('os');
const pkg = require('../package.json');
const htmlPlugin = require('./htmlPlugin');
const baseConfig = require('./webpack.base.config');
const { resolve } = require('./utils');
const getEntry = require('./entry');

const host = (_ => {
    const ifaces = os.networkInterfaces();
    const ips = Object.values(ifaces).reduce((x, y) => x.concat(y), []);
    for (let i = 0; i < ips.length; i++) {
        const details = ips[i];
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
            return details.address;
        }
    }
    return '127.0.0.1';
})();

module.exports = merge(baseConfig, {
    entry: getEntry(),
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: resolve('dist'),
        filename: pkg.version + '/[name].js?v=[hash:7]'
    },
    devServer: {
        host: host,
        inline: true,
        quiet: true,
        hot: true, //热更新
        open: true, //打开游览器
        compress: true, //开发服务器是否启动gzip等压缩
        clientLogLevel: 'warning',
        port: '8021',
        historyApiFallback: true
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/, // 忽略不用监听变更的目录
        aggregateTimeout: 500, // 防止重复保存频繁重新编译,500毫米内重复保存不打包
        poll: 1000 // 每秒询问的文件变更的次数
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        ...htmlPlugin,
        new PruifyCSSPlugin({
            paths: glob.sync(resolve('/dist/*.html'))//pro下所有的html
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
