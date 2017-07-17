'use strict'

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'
import Navbar from './Navbar'

export default () => (
  <Router>
    <div id="main" className="container-fluid text-left">
      <Navbar />
      <div className="col-xs-10">
        <Switch>
          <Route path="/home" component={AllCampuses} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/students/:studentId" component={SingleStudent} />
        </Switch>
      </div>
    </div>
  </Router>
)
