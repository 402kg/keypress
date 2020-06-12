const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImportWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpackMerge = require('webpack-merge')
const { DefinePlugin } = require('webpack')

const DEBUG = process.env.NODE_ENV !== 'production'

const options = {
    mode: 'none',
    resolve: {
        extensions: ['.js', '.jsx', '.html', '.styl'],
        modules: ['node_modules', 'src'],
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@src': path.resolve(__dirname, './src'),
        },
    },
    resolveLoader: {
        modules: ['node_modules', 'src'],
    },
    entry: {
        main: ['./src/index.js'],
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.styl/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        camelCase: 'only',
                        importLoaders: 2,
                        modules: true,
                        localIdentName: DEBUG
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64]',
                    },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [autoprefixer],
                    },
                }, {
                    loader: 'stylus-loader',
                }],
            },
            {
                test: /\.css/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }],
            },
            {
                test: /\.(eot|svg|cur)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:20].[ext]',
                    limit: 10000,
                },
            }, {
                test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:20].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new ImportWebpackPlugin([{ to: '', from: 'src/assets' }], {
            ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'],
            debug: 'warning',
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
        }),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
}

module.exports = DEBUG
    ? webpackMerge(options, require('./webpack.dev'))
    : webpackMerge(options, require('./webpack.dist'))
