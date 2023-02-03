const Nodev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssestPlugin = require('optimize-css-assets-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports ={
    mode: Nodev ? 'developement' : 'production',
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
            }),
            new OptimizeCSSAssestPlugin({})
        ]
    },

    output:{
        filename:'./public/main.js',
    },

    Plugin:[
        new MiniCssExtractPlugin({filename:'./public/style.css'}),

        new copyWebpackPlugin ({
           patterns:[
            {context:'src/', from:'**/*.html'},
            {context:'src/', from:'Imgs/**/*.'}
           ] 
        })
    ],
    module:{
        reules:[
           {
            test:/\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                'sass-loader',
                 'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: 'file-loader'
        },
        {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            use: 'file-loader'
        } 
        ]
    }
}
