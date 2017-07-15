import React, { Component } from 'react';
import axios from 'axios';
import StudentsTable from './StudentsTable'

export default class SingleCampus extends Component {
	constructor() {
		super();
		this.state = {
			campus: {}
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

		const students = [
			{ id: 1, name: "lena", email: "lforti4", campusId: 1 },
			{ id: 2, name: "sdfena", email: "lforti4", campusId: 1 },
			{ id: 3, name: "ledsfna", email: "lforti4", campusId: 2 }
		]

		const campus = { id: 1, name: "field" }

		return (
			<div>
				<h1>{campus.name} Campus</h1>
				<p> Everyone loves to study at {campus.name} campus!</p>
				<hr />
				<h4 className="text-left">Students of {campus.name} Campus:</h4>
				<StudentsTable students={students} />
			</div>
		)
	}

}

