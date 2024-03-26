const path = require('path')
const html_webpack = require('html-webpack-plugin')
const css_webpack = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [css_webpack.loader,'css-loader']
            },
        ]
    },
    plugins: [
        new css_webpack({
            filename: './src/css/style.css'
        }),
        new html_webpack({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        port: 9000,
    }
}