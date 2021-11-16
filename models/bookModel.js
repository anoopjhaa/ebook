const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  viewlink: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Books', bookSchema)
