const path = require('path');
const webpack = require('webpack');
const packageInfo = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackBar = require('webpackbar');

const baseConfig = {
  entry: {
    'logic-graph': path.resolve('/src/index'),
  },
  module: {
    // loaders: [{}, {}, {}]
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
    devtool: 'eval-cheap-module-source-map',
    output: {
      filename: './public/[name].js',
      sourceMapFilename: '[file].map',
    },
    devServer: {
      host: '127.0.0.1',
      port: '8080',
    },
    plugins: [
      new webpackBar({ name: 'Logic-Graph' }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // new BundleAnalyzerPlugin({ port: 8888 })
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