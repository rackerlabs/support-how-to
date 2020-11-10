const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require("dotenv");
const fs = require("fs");
const webpack = require("webpack");
/**
 * Load env vars from .env if available
 */
dotenv.config();
module.exports = {
  entry: [
    path.resolve('src', 'js', 'index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.scss', '.css', '.js'],
    modules: [
      path.resolve(__dirname, "node_modules"),
    ],
  },
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      // Provide enviroment variable defaults
      // from .env
      ALGOLIA_APP_ID: JSON.stringify(process.env.ALGOLIA_APP_ID),
      ALGOLIA_ADMIN_KEY: JSON.stringify(process.env.ALGOLIA_ADMIN_KEY),
      ALGOLIA_INDEX_NAME: JSON.stringify(process.env.ALGOLIA_INDEX_NAME),
      ALGOLIA_INDEX_FILE: JSON.stringify(process.env.ALGOLIA_INDEX_FILE),
      ALGOLIA_SEARCH_KEY: JSON.stringify(process.env.ALGOLIA_SEARCH_KEY),
    })],
};
