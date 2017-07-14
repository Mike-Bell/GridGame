var path = require('path');
var webpack = require('webpack');
var appPath = path.resolve(__dirname, 'app');
console.log(appPath);

module.exports = {
    entry: {
        bundle: [
            "./app/main.jsx",
            "./app/Style.less"
        ]
    },
    output: {
        path: __dirname,
        filename: "bin/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.jsx?/,
                include: appPath,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: ["node_modules"]
    }
};