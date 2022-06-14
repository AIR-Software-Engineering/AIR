const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingTB2Schema = new Schema({
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

const Rating2 = mongoose.model('Rating2', ratingTB2Schema)

module.exports = Rating2