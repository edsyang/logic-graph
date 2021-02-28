const path = require('path');
const webpack = require('webpack');
const packageInfo = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackBar = require('webpackbar');

const baseConfig = {
  entry: {
    'logic-graph': path.resolve(__dirname, './src/index'),
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }, 
      { test: /\.less$/, use: ['style!css!less'] }, 
      { test: /\.css$/, use: ['style!css'] }
    ]
  },
  externals: {
    // '': ''
  },
  devtool: 'none',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less', '.css']
  },
  node: {
    // process: false
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
      contentBase: '.',
      historyApiFallback: true,
      inline: true,
      open: true,
      host: '127.0.0.1',
      port: '8080',
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
      new BundleAnalyzerPlugin({ port: 8888 })
    ]
  })
} else if (process.env.NODE_ENV === 'development') {
  webpackConfig = merge({
    devtool: 'source-map',
    output: {
      filename: './build/[name].js',
      sourceMapFilename: '[file].map'
    },
  })
} else {
  webpackConfig = merge({
    
  })
}

function merge(config) {
  return Object.assign({}, baseConfig, config);
}

module.exports = webpackConfig;