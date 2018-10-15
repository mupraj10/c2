const {expect} = require('chai')
const db = require('../index')
const Vet = db.model('vet')

describe('Vet model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

}) 
