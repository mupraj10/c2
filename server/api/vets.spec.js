/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Vet = db.model('vet')

describe('Vet routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/pets/', () => {
    const vetDetails = [{
        name: 'Puppy MD', 
        location: 'New York City',
        description: "Always on the pet side"
    }]

    beforeEach(() => {
      return Vet.create(vetDetails[0])
    })

    it('GET /api/pets', async () => {
      const res = await request(app)
        .get('/api/vets')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(vetDetails)
    })
  }) 
}) 
