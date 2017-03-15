const webpack = require('webpack')
const Path = require('path')
const entries = require('./webpack.entries')

const __DEV__ = process.env.NODE_ENV != 'production'
const __PRD__ = process.env.NODE_ENV === 'production'

const webpackConfig = {
  devtool: __DEV__ ? 'inline-source-map' : false,
  entry: entries,
  resolve: {
    modules: [
      Path.join(__dirname, "./src/js"),
      'node_modules'
    ]
  },
  output: {
    path: Path.join(__dirname + '/dist/js'),
    filename: '[name].js',
    publicPath: __DEV__ ? '/js/': ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre'
      // }
    ],
  },
  plugins: (()=>{
    if(__PRD__){
      return [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
      ]
    }
  })()
}

module.exports = webpackConfig