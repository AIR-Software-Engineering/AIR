const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingTBSchema = new Schema({
  student_id : {
    type: String,
    required: true
  },
  course_id : {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  keywords: [{
    type: String,
    required: true,
  }],
  rating: {
    type: Number,
    required: true,
  }
}, {
  timestamps: false,
  _id: false
})

const Rating = mongoose.model('Rating', ratingTBSchema)

module.exports = Rating