var path = require('path');
var webpack = require('webpack');

module.exports = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/js/'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: path.resolve(__dirname, 'node_modules/')
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};