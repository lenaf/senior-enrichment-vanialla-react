import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-dom'
import StudentsTable from './StudentsTable'

const students = [
	{ id: 1, name: "lena", email: "lforti4", campusId: 1 },
	{ id: 2, name: "sdfena", email: "lforti4", campusId: 1 },
	{ id: 3, name: "ledsfna", email: "lforti4", campusId: 2 }
]


export default class AllStudents extends Component {
	constructor() {
		super();
	}

	render() {

		return (
			<div>
				<h1>All Students</h1>
				<StudentsTable students={students} />
				<hr/>
				<h4>Add Student</h4>
				<form className="form-group">
					<label>Name: </label>
					<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe"></input>
					<label>Email: </label>
					<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="JaneDoe@gmail.com"></input>
					<label>Campus: </label>
					<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Field"></input>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}
