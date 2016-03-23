import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './MyComponent'

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}
render(MyComponent)

if(module.hot) {
  module.hot.accept('./MyComponent', () => {
    const Component = require('./MyComponent').default
    render(Component)
  })
}