const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingTBSchema = new Schema({
  student_id : {
    type: Number,
    required: true
  },
  course_id : {
    type: Number,
    required: true,
  },
  credit: { //몇학점인지
    type: Number,
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