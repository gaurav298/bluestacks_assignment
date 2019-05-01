var path = require('path');
const webpack = require('webpack');

var config = {
    entry: './App.js',
    output: {
        path: '/',
        filename: 'index.js',
    },
    devServer: {
        host: 'localhost',
        port: 2222,
        historyApiFallback: true,
        open: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1
                },
              }]
          },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            }
        ]
    }
};
module.exports = config;
