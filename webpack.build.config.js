/* eslint-disable quote-props */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'angularjs-input-birthday': './src/input-birthday.component.js',
    'angularjs-input-birthday.min': './src/input-birthday.component.js'
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'nosources-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      enforce: 'pre'
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loaders: [
        'ng-annotate-loader',
        'babel-loader'
      ]
    }, {
      test: /\.html$/,
      loaders: [
        'html-loader'
      ]
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
