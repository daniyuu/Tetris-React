/**
 * Created by yueych on 1/22/2017.
 */
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/public/index.html',
    filename: 'index.html'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },

            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=90000'
            }
        ]
    },
    resolve: {
        root: [
            path.resolve('./src'),
            path.resolve('./src/js'),
        ],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [HTMLWebpackPluginConfig]
};