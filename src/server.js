import express from 'express'
import handler from './handler'
import { addHotMiddleware, hotReloadIn } from './dev/hot'

const app = express()
addHotMiddleware(app)
app.use(express.static('public'))

let rootHandler = handler
app.get('/', (...args) => { rootHandler(...args) })

app.listen(process.env.PORT || 8080, () => console.log('app started')) 

hotReloadIn(__dirname, () => rootHandler = require('./handler').default)