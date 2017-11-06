var webpack = require('webpack');
var path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist/assets'),
        filename: 'bundle.js',
        publicPath: 'assets'
    },
    devServer: {
        inline:true,
        contentBase:'./dist',
        port: 3023
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/(node_modules)/,
                query: {
                    presets:['latest','stage-0','react']
                }

            }
        ]
    }
}
