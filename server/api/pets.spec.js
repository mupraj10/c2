/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Pet = db.model('pet')

describe('Pet routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/pets/', () => {
    const petDetails = {
        name: 'Cody', 
        type: 'dog', 
        age: '1',
        description: "Fun and loving"
    }

    beforeEach(() => {
      return Pet.create(petDetails)
    })

    it('GET /api/pets', async () => {
      const res = await request(app)
        .get('/api/pets')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(petDetails)
    })
  }) 
}) 
