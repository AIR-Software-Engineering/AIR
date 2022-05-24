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
    type: String,
    required: true,
  },
  classCode: {
    type: Number,
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
  lectuerSchedule: {
    type: String,
    required: true,
  },
  keywords: [{
    type: String,
  }],
}, {
  timestamps: false
})

const Lectures = mongoose.model('Lectures', lectureSchema)

module.exports = Lectures