const db = require('../db');
const Sequelize = require('sequelize')

const Pet = db.define('pet', {
    name: Sequelize.STRING, 
    type: Sequelize.STRING, 
    age: Sequelize.INTEGER, 
    description: Sequelize.STRING
})

module.exports = Pet;