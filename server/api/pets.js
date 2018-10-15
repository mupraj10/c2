const router = require('express').Router()
const {
  Pet
} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets)
  } catch (err) {
    next(err)
  }
})

// single pet
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const pets = await Pet.findById(id);
    res.json(pets)
  } catch (err) {
    next(err)
  }
})
