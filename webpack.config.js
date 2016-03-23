const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/entry',
    'webpack-hot-middleware/client'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: __dirname + '/public'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.HotModuleReplacementPlugin
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
}