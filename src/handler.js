import React from 'react'
import { renderToString } from 'react-dom/server'
import MyComponent from './MyComponent'

export default (req, res) => {
  const content = renderToString(<MyComponent />)
  const html = `<!doctype html>
<html>
  <head>
    <title>Reloading Example</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`
  res.end(html)
}