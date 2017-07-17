import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-dom'
import BlueBird from 'bluebird'
import history from '../history'

export default class AllStudents extends Component {
	constructor() {
		super();
		this.state = {
			student: {},
			campuses: [],
			inputName: '',
			inputEmail: '',
			inputCampusId: 1,
		}
		this.handleChangeName = this.handleChangeName.bind(this)
		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangeCampus = this.handleChangeCampus.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		const studentId = this.props.match.params.studentId
		const gettingStudent = axios.get(`/api/students/${studentId}`)
		const gettingCampuses = axios.get('/api/campuses/')
		BlueBird.all([gettingStudent, gettingCampuses])
			.map(res => res.data)
			.spread((student, campuses) => {
				campuses.forEach(campus => {
					if (student.campusId === campus.id) {
						student.campus = campus.name
					}
				})
				this.setState({ student, inputCampusId: student.campusId, campuses })
			})
	}

	handleChangeName(evt) {
		this.setState({ inputName: evt.target.value })
	}

	handleChangeEmail(evt) {
		this.setState({ inputEmail: evt.target.value })
	}

	handleChangeCampus(evt) {
		this.setState({ inputCampusId: evt.target.value })
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const name = this.state.inputName
		const email = this.state.inputEmail
		const campusId = this.state.inputCampusId
		const studentId = this.state.student.id
		axios.put(`/api/students/${studentId}`, { name, email, campusId })
			.then(() => {
		this.props.history.push('/students')})
	}

	render() {

		const { student, campuses, inputName, inputEmail} = this.state;
		const validEmail = (inputEmail && inputEmail.includes('@') && inputEmail.includes('.com'));

		return (
			<div>
				<h4>Current Student Info</h4>
				<p>{student.name}</p>
				<p>{student.email}</p>
				<p>{student.campus}</p>
				<hr/>
				<h4>Update Student Info</h4>
				<form className="form-group" onSubmit={this.handleSubmit}>
					<label>Name: </label>
					<input
						type="text"
						className="form-control"
						value={inputName}
						onChange={this.handleChangeName}>
					</input>
					<label>Email: </label>
					<input
						type="text"
						className="form-control"
						value={inputEmail}
						onChange={this.handleChangeEmail}>
					</input>
					<label>Campus: </label>
					<select className="form-control" onChange={this.handleChangeCampus}>
						{campuses.map(campus => (
							<option key={campus.id} value={campus.id}>{campus.name}</option>
						)
						)}
					</select>
					<button
						type="submit"
						disabled={!inputName || !inputEmail || !validEmail}
						className="btn btn-primary"
					>Submit</button>
				</form>
				{!validEmail && inputEmail && <div className='alert alert-warning'> Please enter valid email </div>}
			</div>
		)
	}

}

