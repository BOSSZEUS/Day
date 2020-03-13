const Hotdog = require('../models/Hotdog.js')
const router = require('express').Router()
// GET all hotdogs
router.get('/hotdogs', (req, res) => {
  Hotdog.findAll()
    .then(hotdogs => res.json(hotdogs))
    .catch(e => console.error(e))
})

// POST a hotdog
router.post('/hotdogs', (req, res) => {
  Hotdog.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

// PUT a hotdog
router.put('/hotdogs/:id', (req, res) => {
  Hotdog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})
// DELETE a hotdog
router.delete('/hotdogs/:id', (req, res) => {
  Hotdog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

module.exports = router
