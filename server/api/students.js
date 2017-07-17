'use strict'

//setup: make and export a router, get access to the db

const router = require('express').Router();
module.exports = router;
const db = require('../db') //how would you get models directly from here?
const { Campuses, Students } = require('../db/models')

//GET api/students
router.get('/', (req, res, next) => {
	Students.findAll()
		.then(students => res.json(students))
		.catch(next)
})

// GET /api/students/:studentId
router.get('/:studentId', function (req, res, next) {
	Students.findById(req.params.studentId)
		.then(student => res.json(student))
		.catch(next);
});

// POST /api/students
router.post('/', function (req, res, next) {

	Campuses.findById(req.body.campusId)
		.then(campus => {
			const student = Students.build(req.body);
			student.setCampus(campus, { save: false });
			return student.save()
				.then(student => {
					student = student.toJSON();
					student.campus = campus.name;
					return student;
				});
		})
		.then(student => {
			res.json(student);
		})
		.catch(next);

});


// PUT /api/students/:studentId
router.put('/:studentId', function (req, res, next) {
	const studentId = req.params.studentId;

	Students.findById(studentId)
		.then(student => {
			student.update(req.body);
		})
		.then(()=> {return Students.findById(studentId)})
		.then(student => res.json(student))
		.catch(next);
});

// DELETE /api/students/:studentId
router.delete('/:studentId', function (req, res, next) {
	const studentId = req.params.studentId;

	Students.destroy({ where: { id: studentId } })
		.then(() => {
			return Students.findAll()
		})
		.then(students => res.json(students))
		.catch(next);
});
