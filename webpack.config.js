const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssestPlugin = require('optimize-css-assets-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports ={
    mode:'developement',
    entry:'./src/index.js',
    devServer:{
        port:9000,
        static:'./public'
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel:true
            })
        ]
    }
}
