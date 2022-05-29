require('dotenv').config();
const Users = require('../models/user');
const papers = require('../models/paper');
const lecture = require('../models/lecture');
const exercise = require('../models/exercise');
const books = require('../models/books');
const rating = require('../models/ratingTB');
const cwr = require('../utils/createWebResponse');
const fs = require("fs");
const path = require("path");




const getUserInfo = async (req, res) => {
  try {
    const UserData = await Users.find({'ID': req.query.ID});
    return cwr.createWebResp(res, header, 200, UserData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getUserInfo error', e.message || e);
  }
}

const getLectureInfo = async (req, res) => {
  try {
    const lectureData = await lecture.find({'classCode': req.query.classCode})
    return cwr.createWebResp(res, header, 200, lectureData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getLectureInfo error', e.message || e);
  }
}

const getBookInfo = async (req, res) => {
  try {
    const bookData = await books.find({'ISBN': req.query.ISBN})
    return cwr.createWebResp(res, header, 200, bookData);
  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getBookInfo error', e.message || e);
  }
}

const getExerciseInfo = async (req, res) => {
  try {
    const exerciseData = await exercise.find({'ISBN': req.query.ISBN, 'chapter': req.query.chapter});
    return cwr.createWebResp(res, header, 200, exerciseData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getExerciseInfo error', e.message || e);
  }
}

const getPaperInfo = async (req, res) => {
  try {

    const paperData = await papers.find({'title': req.query.title});
    return cwr.createWebResp(res, header, 200, paperData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getPaperInfo error', e.message || e);
  }
}

// 정렬 추가해야 함
const getRecommendLectureList = async (req, res) => {
  try {
    const str = req.query.sort;
    const lectureData = await lecture.find().limit(req.query.count);
    return cwr.createWebResp(res, header, 200, lectureData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getRecommendPaperList error', e.message || e);
  }
}

// 정렬 추가해야 함
const getRecommendBookList = async (req, res) => {
  try {
    const str = req.query.sort;
    const bookData = await books.find().limit(req.query.count);
    return cwr.createWebResp(res, header, 200, bookData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getRecommendBookList error', e.message || e);
  }
}

const getRecommendPaperList = async (req, res) => {
  try {
    const str = req.query.sort;
    const paperData = await papers.find().limit(req.query.count);
    return cwr.createWebResp(res, header, 200, paperData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getRecommendPaperList error', e.message || e);
  }
}

const getRecommendExerciseList = async (req, res) => {
  try {
    const str = req.query.sort;
    const exerciseData = await exercise.find().limit(req.query.count);
    return cwr.createWebResp(res, header, 200, exerciseData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getRecommendExerciseList error', e.message || e);
  }
}

const postUserKeywords = async (req, res) => {
  try {
    Users.updateOne({'ID': req.body.ID},
      {"$push": {"keywords": req.body.keyword}}).catch(err=> {console.log(err)});
    return cwr.createWebResp(res, header, 200,
      'postUserKeywords Success!');

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'postUserKeywords failed', e.message || e);
  }
}

const deleteUserKeywords = async (req, res) => {
  try {
    Users.updateOne({'ID': req.body.ID},
      {"$pull": {keywords: req.body.keyword}}).catch(err=> {console.log(err)});
    return cwr.createWebResp(res, header, 200,
      'deleteUserKeywords Success!');
  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'deleteUserKeywords failed', e.message || e);
  }

}

const postRate = async (req, res) => {
  try {
    const userData = Users.findOne({'student_id': req.body.student_id})
    rating.updateOne({'student_id': req.body.student_id, 'course_id': req.body.course_id},
      {'student_id': req.query.student_id,
        'course_id': req.body.course_id,
        'grade': userData.grade,
        'major': userData.major,
        'keywords': userData.keywords,
        'rating': req.body.rating
      })
    return cwr.createWebResp(res, header, 200,
      'postRate Success!');

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'postRate failed', e.message || e);
  }

}
module.exports = {
  getUserInfo,
  getLectureInfo,
  getBookInfo,
  getExerciseInfo,
  getPaperInfo,
  getRecommendLectureList,
  getRecommendBookList,
  getRecommendPaperList,
  getRecommendExerciseList,
  postUserKeywords,
  deleteUserKeywords,
  postRate
}