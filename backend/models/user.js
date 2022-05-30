const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto');

function hash(password) {
  return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ID: {
    type: String,
    required: true
  },
  PW: {
    type: String,
    required: true
  },
  student_id: {
    type: Number,
    required: true
  },
  grade: {
    type: Number,
    required: true,
  },
  major: {
    type: Number,
    required: true
  },
  points: { // for exercises in books
    type: Number,
    required: true
  },
  keywords: [{
    type: String,
  }],
  takenLecture: [{
    type: String
  }]

}, {
  timestamps: false,
  _id: false
})



const Users = mongoose.model('Users', userSchema)

module.exports = Users