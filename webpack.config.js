const path = require('path');
const webpack = require('webpack');
const packageInfo = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackBar = require('webpackbar');

const baseConfig = {
  entry: {
    'draggable-category': path.resolve('index'),
  },
  module: {
    loaders: [{}, {}, {}]
  },
  externals: {
    // '': ''
  },
  devtool: 'none',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less', '.css']
  },
  node: {
    process: false
  }
}

let webpackConfig;

if (process.env.NODE_ENV === 'serve') {
  webpackConfig = merge({
    plugins: [
      new webpackBar({ name: 'Building...' }),
      new BundleAnalyzerPlugin({ port: 8888 }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  })
} else if (process.env.NODE_ENV === 'development') {
  webpackConfig = merge({
    
  })
} else {
  webpackConfig = merge({
    
  })
}

function merge(config) {
  return Object.assign({}, baseConfig, config);
}

module.exports = webpackConfig;