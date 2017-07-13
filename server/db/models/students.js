'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student',
//object
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
//methods
  {}
)
