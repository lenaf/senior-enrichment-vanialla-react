'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus',
//object
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
//methods
  {}
)
