const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paperSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  journal: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  keywords: [{
    type: String,
  }],
}, {
  timestamps: false
})

const Papers = mongoose.model('Papers', paperSchema)

module.exports = Papers