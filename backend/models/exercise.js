const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  ISBN: {
    type: String,
    required: true
  },
  chapter: {
    type: Number,
    required: true,
  },
  problem: {
    type: String,
    required: true
  },
  answers: [{
    type: String,
    required: true
  }]

}, {
  timestamps: false,
  _id: false
})

const Exercises = mongoose.model('Exercises', exerciseSchema)

module.exports = Exercises