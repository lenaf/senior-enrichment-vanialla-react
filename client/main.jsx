'use strict'

//import react librarys
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'

//import store
import store from './store'

//import components
import AllCampuses from './components/AllCampuses'
import SingleCampus from './components/SingleCampus'
import AllStudents from './components/AllStudents'
import SingleStudent from './components/SingleStudent'
import Navbar from './components/Navbar'

//render vs ReactDOM.render?
render(
  //put the store in global context
  <Provider store={store}>
    <div id="main" className="container-fluid text-left">
      <Navbar />
      <Router>
        <div className="col-xs-10">
          <Switch>
            <Route path= "/home" component= {AllCampuses} />
            <Route exact path= "/campuses" component= {AllCampuses} />
            <Route path= "/campuses/:campusId" component={SingleCampus} />
            <Route exact path= "/students" component= {AllStudents} />
            <Route path= "/students/:studentId" component={SingleStudent} />
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById('main')
)
