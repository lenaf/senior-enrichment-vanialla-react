'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AllCampuses from './components/AllCampuses'
import Navbar from './components/Navbar'

render(
  <Provider store={store}>
    <div id="main" className="container-fluid text-center">
      <Navbar />
      <div className="col-xs-10">
        <AllCampuses />
      </div>
    </div>
  </Provider>,
  document.getElementById('main')
)
