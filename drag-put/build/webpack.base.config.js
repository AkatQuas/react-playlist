'use strict';
const pkg = require('../package.json');
const { resolve } = require('./utils');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: pkg.version + '/imgs/[name].[ext]?v=[hash:7]'
          }
        },
      },
      {
        test: /\.(mp3|mp4)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
            limit: 10000,
            name: pkg.version + '/medias/[name].[ext]?v=[hash:7]'
          }
        },
      }
    ]
  },
};