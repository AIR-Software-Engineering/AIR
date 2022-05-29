const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lectureSchema = new Schema({
  courseName: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true,
  },
  professor: {
    type: String,
    required: true,
  },
  classNumber: {
    type: Number,
    required: true,
  },
  classCode: {
    type: String,
    required: true,
  },
  courseClassification: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  lectureSchedule: {
    type: String,
    required: true,
  },
  keywords: [{
    type: String,
  }],
}, {
  timestamps: false,
  _id: false
})

const Lectures = mongoose.model('Lectures', lectureSchema)

module.exports = Lectures