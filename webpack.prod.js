const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'production',

    performance : {
        hints : false,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'templates/index.prod.html'),
            favicon: path.resolve(__dirname, 'templates/default.ico'),
        }),
    ],
});
