const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
        static: '/home/nikolay/Projects/JavaScript_HW/modules/dist/main.html',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin()
    ]
}
