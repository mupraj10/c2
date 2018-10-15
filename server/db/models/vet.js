const db = require('../db');
const Sequelize = require('sequelize')

const Vet = db.define('vet', {
    name: Sequelize.STRING, 
    img: Sequelize.STRING, 
    location: Sequelize.STRING, 
    description: Sequelize.STRING
})

module.exports = Vet;