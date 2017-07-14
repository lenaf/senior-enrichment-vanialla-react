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
				<StudentsTable students = {students}/>
			</div>
		)
	}
}
