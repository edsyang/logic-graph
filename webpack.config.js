const path = require('path');
const webpack = require('webpack');
const packageInfo = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackBar = require('webpackbar');

const merge = (config) => {
  return Object.assign({}, baseConfig, config);
}

const baseConfig = {
  entry: {
    'logic-graph': './src/index',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader'] },
      { test: /\.(ts|tsx)$/, use: ['babel-loader', 'ts-loader'] }, 
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, 
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  externals: {
    '@antv/g6': 'var window.G6'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less', '.css']
  }
}

let webpackConfig;

if (process.env.NODE_ENV === 'serve') {
  webpackConfig = merge({
    devtool: 'eval-cheap-module-source-map',
    output: {
      path: __dirname + './public',
      filename: '[name].js',
      sourceMapFilename: '[file].map'
    },
    devServer: {
      contentBase: '.',
      historyApiFallback: true,
      inline: true,
      open: true,
      host: '127.0.0.1',
      port: '8082'
    },
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(packageInfo.version),
        process: 'false',
        MOCK: 'true',
        'process.env.NODE_ENV': '"production"',
      }),
      new webpackBar({ name: 'Logic-Graph' }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // new BundleAnalyzerPlugin({ analyzerPort: 9999 })
    ]
  })
} else if (process.env.NODE_ENV === 'development') {
  webpackConfig = merge({
    devtool: 'source-map',
    output: {
      path: __dirname + '/build',
      filename: '[name].js',
      sourceMapFilename: '[file].map'
    },
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(packageInfo.version),
        MOCK: 'false',
        process: 'false',
        'process.env.NODE_ENV': '"production"',
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
  })
} else {
  webpackConfig = merge({
    devtool: 'source-map',
    output: {
      path: __dirname + '/build',
      filename: '[name].min.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(packageInfo.version),
        MOCK: 'false',
        process: JSON.stringify('false'),
        'process.env.NODE_ENV': '"production"',
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  })
}

module.exports = webpackConfig;