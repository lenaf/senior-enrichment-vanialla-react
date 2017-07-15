import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-dom'

export default class AllStudents extends Component {
	constructor() {
		super();
	}

	render() {

		return (
			<div>
				<h4>Update Student Info</h4>
				<form className="form-group">
					<label>Updated Name: </label>
					<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe"></input>
					<label>Updated Email: </label>
					<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="JaneDoe@gmail.com"></input>
					<label>Updated Campus: </label>
					<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Field"></input>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}

}

