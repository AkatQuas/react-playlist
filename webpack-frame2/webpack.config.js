var webpack = require('webpack');
var path = require('path')
module.exports = {
    entry: "./src/index.js",
    output: {
        path:path.resolve(__dirname,'./dist/assets'),
        filename:'bundle.js',
        publicPath:'assets'
    },
    devServer: {
        inline: true,
        contentBase:'./dist',
        port: 3013
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets:['latest', 'stage-0', 'react']
                }
            },
            {
                test:/\.json$/,
                exclude:/(node_modules)/,
                loader: 'json-loader'
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }


        ]
    }
}