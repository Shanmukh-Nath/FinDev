import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import GetstartedbuttonLogin22 from './views/getstartedbutton-login22'
import Register from './views/register'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={GetstartedbuttonLogin22} path="/" />
        <Route exact component={Register} path="/register" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
