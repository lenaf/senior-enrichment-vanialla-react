'use strict'

//import react librarys
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//import components
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'
import Navbar from './Navbar'

export default () => (
  <div id="main" className="container-fluid text-left">
    <Navbar />
    <Router>
      <div className="col-xs-10">
        <Switch>
          <Route path="/home" component={AllCampuses} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/students/:studentId" component={SingleStudent} />
        </Switch>
      </div>
    </Router>
  </div>
)
