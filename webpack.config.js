const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
        static:  "./build",
        port: 5000,
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/build'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new CopyWebpackPlugin({
            patterns:[
            { context: 'src/', from: '**/*.html' },
            { context: 'src/', from: 'Imgs/**/*' }
        ]})
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            use: ['file-loader']
        }]
    }
}