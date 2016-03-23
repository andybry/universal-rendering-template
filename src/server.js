import express from 'express'
import handler from './handler'

const app = express()

if(process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const config = require('../webpack.config')
  const compile = webpack(config)
  const webpackDevMiddleware = require('webpack-dev-middleware')
  app.use(webpackDevMiddleware(compile))
  const webpackHotMiddleware = require('webpack-hot-middleware')
  app.use(webpackHotMiddleware(compile))
}

let localHandler = handler
app.use(express.static('public'))
app.get('/', (...args) => { localHandler(...args) })

if(process.env.NODE_ENV !== 'production') {
  const chokidar = require('chokidar')
  chokidar
    .watch(__dirname)
    .on('change', (path) => {
      const cache = require.cache
      Object.keys(cache)
        .filter(key => key.startsWith(__dirname))
        .forEach(key => delete cache[key])
      try {
        localHandler = require('./handler').default
        console.log('Reloaded: ' + path)
      } catch(e) {
        console.log(path + ' not reloaded: ')
        console.log(e)
      }
    })
}

app.listen(process.env.PORT || 8080, () => console.log('app started')) 