const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'dist'),
        chunkFilename: '[id].[chunkhash].chunk.js',
        filename: '[hash:24].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: './index.html',
            inject: true,
            template: './src/index.html',
        }),
    ],
    optimization: {
        minimizer: [new TerserPlugin()],
    },
}
