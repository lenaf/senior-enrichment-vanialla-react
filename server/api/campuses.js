'use strict'

//setup: make and export a router, get access to the db

const router = require('express').Router();
module.exports = router;
const db = require('../db') //how would you get models directly from here?
const {Campuses, Students} = require('../db/models')

// GET /api/campuses/
router.get('/', (req, res, next) => {
    Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})

// GET /api/campuses/:campusId
router.get('/:campusId', function (req, res, next) {
  Campuses.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

// GET /api/campuses/:campusId/students
router.get('/:campusId/students', function (req, res, next) {
  const campusId = req.params.campusId;

  Students.findAll({ where: { campusId } })
    .then(students => res.json(students))
    .catch(next);
});

// POST /api/campuses
router.post('/', function (req, res, next) {
  Campuses.create({name: req.body}, {image: '/images/campuses/trees.png'})
    .then(campus => res.json(campus))
    .catch(next);
});

