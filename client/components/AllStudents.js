import React, { Component } from 'react';
import axios from 'axios';
import StudentsTable from './StudentsTable'
import BlueBird from 'bluebird'

export default class AllStudents extends Component {
	constructor() {
		super();
		this.state = {
			students: [],
			campuses: [],
			inputName: '',
			inputEmail: '',
			inputCampusId: 1,
		};
		this.handleChangeName = this.handleChangeName.bind(this)
		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangeCampus = this.handleChangeCampus.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	componentDidMount() {
		const gettingStudents = axios.get('/api/students/')
		const gettingCampuses = axios.get('/api/campuses/')
		BlueBird.all([gettingStudents, gettingCampuses])
			.map(res => res.data)
			.spread((students, campuses) => {
				students.map((student) => {
					campuses.forEach(campus => {
						if (student.campusId === campus.id) {
							student.campus = campus.name
						}
					})
				})
				this.setState({ students, campuses })
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
		axios.post('api/students', { name, email, campusId })
			.then(res => res.data)
			.then(newStudent => {
				this.setState({ students: [...this.state.students, newStudent] })
			});
		this.setState({ inputName: '', inputEmail: '' })
	}

	handleDelete(studentId) {
		axios.delete(`api/students/${studentId}`)
			.then(res => res.data)
			.then(students => this.setState({students}))
	}

	render() {

		const { students, campuses, inputName, inputEmail} = this.state;
		const validEmail = (inputEmail && inputEmail.includes('@') && inputEmail.includes('.com'));
		return (
			<div>
				<h1>All Students</h1>
				<StudentsTable students={students} handleDelete={this.handleDelete}/>
				<hr />
				<h4>Add Student</h4>
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
