import React from 'react'
import ReactDOM from 'react-dom'

try {
  const App = require('./App').default

  const mountPoint = document.getElementById('root')
  ReactDOM.render(<App />, mountPoint)
} catch (e) {
  window.mixpanel.track('issue', { error: JSON.stringify(e) })

  throw e
}
