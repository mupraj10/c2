const {expect} = require('chai')
const db = require('../index')
const Pet = db.model('pet')

describe('Pet model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

}) 
