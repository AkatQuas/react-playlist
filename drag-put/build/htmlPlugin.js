'use strict';
const data = require('./entry').data;
const HTMLPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');
const htmlPlugin = data.map(item => new HTMLPlugin(
    { // 生成一个html页面，同时在webpack编译的时候。把我们所生成的entry都注入到这个html页面中,路径都是根据我们output配置的来走的。
        favicon: 'favicon.ico',
        template: resolve('templates/index_' + item.type + '.html'),
        filename: item.name + '.html',
        title: item.title,
        minify: {
            removeComments: true,
            collapseWhitespace: false,
            removeAttributeQuotes: true //压缩 去掉引号
        },
        chunks: [item.name]
    }
));

module.exports = htmlPlugin;
