const router = require('express').Router()
const {
  Vet
} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const vets = await Vet.findAll();
    res.json(vets)
  } catch (err) {
    next(err)
  }
})

// single vet
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const vets = await Vet.findById(id);
    res.json(vets)
  } catch (err) {
    next(err)
  }
})
