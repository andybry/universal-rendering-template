const merge = require('webpack-merge')
const base = require('./config/webpack/base.config')
const dev = require('./config/webpack/dev.config')
const prod = require('./config/webpack/prod.config')

const extra = process.env.NODE_ENV === 'production' ? prod : dev
module.exports = merge(base, extra)