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
    path.resolve('src', 'js', 'app.js'),
    path.resolve('src', 'styles', 'app.css'),
  ],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      // Provide enviroment variable defaults
      // from .env
      ALGOLIA_APP_ID: JSON.stringify(process.env.ALGOLIA_APP_ID),
      ALGOLIA_NETLIFY_APP_ID: JSON.stringify(process.env.ALGOLIA_NETLIFY_APP_ID),
      ALGOLIA_SEARCH_KEY: JSON.stringify(process.env.ALGOLIA_SEARCH_KEY),
      ALGOLIA_NETLIFY_SEARCH_KEY: JSON.stringify(process.env.ALGOLIA_NETLIFY_SEARCH_KEY),
      ALGOLIA_BLOG_INDEX: JSON.stringify(process.env.ALGOLIA_BLOG_INDEX),
      AlGOLIA_SUPPORT_INDEX: JSON.stringify(process.env.AlGOLIA_SUPPORT_INDEX),
      ALGOLIA_NETLIFY_INDEX: JSON.stringify(process.env.ALGOLIA_NETLIFY_INDEX),
      ALGOLIA_ADMIN_KEY: JSON.stringify(process.env.ALGOLIA_ADMIN_KEY),
      ALGOLIA_SITE_ID: JSON.stringify(process.env.ALGOLIA_SITE_ID)
    })],
};
