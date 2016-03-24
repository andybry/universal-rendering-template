const webpack = require('webpack')

module.exports = {
  entry: [
    './src/entry'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: __dirname + '/../..' + '/public'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin,
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
}