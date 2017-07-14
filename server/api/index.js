//our entry point when /server/start.js tells client that for any requests starting with '/api' to come to ./api

//we're going to make a router to further direct the client to the correct express routes for their requests

'use strict'

const router = require('express').Router();
module.exports = router;

router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));
