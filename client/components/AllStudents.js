import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-dom'

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
			<table className='table text-left'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Campus</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						students.map(student => (
							<tr key={student.id}>
								<td>{student.name}</td>
								<td>{student.email}</td>
								<td>{student.campusId}</td>
								<td>
									<button className="btn btn-danger btn-xs">
										<span className="glyphicon glyphicon-remove"></span>
									</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		)
	}

}

