'use strict'

//setup: make and export a router, get access to the db

const router = require('express').Router();
module.exports = router;
const db = require('../db') //how would you get models directly from here?
const {Campuses, Students} = require('../db/models')

router.get('/', (req, res, next) => {
    Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})
