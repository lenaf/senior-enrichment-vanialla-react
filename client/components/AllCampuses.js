import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-dom'

export default class AllCampuses extends Component {
  constructor() {
    super();
    this.state = {
      campuses: []
    };
  }

  componentDidMount() {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }

  render() {
    const campuses = this.state.campuses

    return (
      <div id="all-campuses">
        <div className="row">
          {
            campuses.map(campus => (
              <div className="col-sm-3" key={campus.id}>
                <a href ={`/campuses/${campus.id}`}>
                <img className="img-responsive" src={campus.image} />
                <div className="caption text-center">
                  <h5>
                    <span>{campus.name}</span>
                  </h5>
                </div>
                </a>
              </div>
            ))
          }
        </div>
        <hr/>
				<h4>Add Campus</h4>
				<form className="form-group">
					<label>Campus Name: </label>
					<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe"></input>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
      </div>
    );
  }
}


