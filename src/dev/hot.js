export function addHotMiddleware(app) {
  if(process.env.NODE_ENV === 'production') return
  const webpack = require('webpack')
  const config = require('../../webpack.config')
  const compiler = webpack(config)
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  app.use(webpackDevMiddleware(compiler, { noInfo: true }))
  app.use(webpackHotMiddleware(compiler))
}

export function uncacheModulesIn(dir, onUncache) {
  const cache = require.cache
  const cacheKeys = Object.keys(cache)
  const uncacheKeys = cacheKeys.filter(key => key.startsWith(dir))
  uncacheKeys.forEach(key => delete cache[key]) 
  try {
    onUncache()
    console.log(`modules in ${dir} reloaded`)
  } catch(e) {
    console.log('problem reloading modules in ${dir}: ')
    console.log(e)
  } 
}

export function hotReloadIn(dir, onReload) {
  if(process.env.NODE_ENV === 'production') return
  const chokidar = require('chokidar')
  const watcher = chokidar.watch(dir)
  watcher.on('change', (module) => {
    console.log(`change in ${module} triggered server reload: `)
    uncacheModulesIn(dir, onReload)
  })
}