import React, { Component } from 'react';
import axios from 'axios';
import StudentsTable from './StudentsTable'
import BlueBird from 'bluebird'

export default class SingleCampus extends Component {
	constructor() {
		super();
		this.state = {
			campus: {},
			students: []
		};
	}

	componentDidMount() {
		const campusId = this.props.match.params.campusId
		const gettingCampus = axios.get(`/api/campuses/${campusId}`)
		const gettingStudents = axios.get(`/api/campuses/${campusId}/students`)
		BlueBird.all([gettingCampus, gettingStudents])
			.map(res => res.data)
			.spread((campus, students) => {
				students.forEach(student => {
					student.campus = campus.name
				})
				this.setState({ campus, students })
			})
	}

	render() {

		const { campus, students } = this.state

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

