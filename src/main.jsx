import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

import './style/index.css'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
