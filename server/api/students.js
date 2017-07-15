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

    Campuses.findOrCreate({
        where: {
            name: req.body.campus
        }
    })
        .then(campus => {
            const student = Students.create(req.body);
            student.campusId = campus.id
            return student
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
        .then(student => student.update(req.body))
        .catch(next);
});

// DELETE /api/students/:studentId
router.delete('/:studentId', function (req, res, next) {
    const studentId = req.params.studentId;

    Students.destroy({ where: { studentId } })
        .then(() => res.status(204).end())
        .catch(next);
});
