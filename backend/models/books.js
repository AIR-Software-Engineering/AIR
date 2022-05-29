const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  imprint: { // 출판사
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  },
  keywords: [{
    type: String,
  }],
}, {
  timestamps: false,
  _id: false
})

const Books = mongoose.model('Books', bookSchema)

module.exports = Books