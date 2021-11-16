const express = require('express')
const router = express.Router()
const bookSchema = require('../models/bookModel')

router.get('/', async (req, res) => {
  try {
    const books = await bookSchema.find()
    res.json(books)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    var Category = req.params.id
    const books = await bookSchema.find({ category: Category })
    res.json(books)
  } catch (err) {
    res.json({ message: err })
  }
})

router.post('/', (req, res) => {
  const book = new bookSchema({
    title: req.body.title,
    category: req.body.category,
    viewlink: req.body.viewlink,
    image: req.body.image,
  })

  book
    .save()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json({ message: err })
    })
})

module.exports = router
