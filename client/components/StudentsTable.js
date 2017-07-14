import React, { Component } from 'react';

const AllStudents = props =>
  (
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
          props.students.map(student => (
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

export default AllStudents
