'use strict';

//require in the models
const Campuses = require('./campuses')
const Students = require('./students')

//define associations
Students.belongsTo(Campuses);
Campuses.hasMany(Students);

//export out so that /db/index.js can grab them and sync with db
module.exports = { Campuses, Students }





// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere
