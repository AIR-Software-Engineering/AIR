require('dotenv').config();
const Users = require('../models/user');
const papers = require('../models/paper');
const lecture = require('../models/lecture');
const exercise = require('../models/exercise');
const books = require('../models/books');
const rating = require('../models/ratingTB');
const rating2 = require('../models/ratingTB2');
const cwr = require('../utils/createWebResponse');
const fs = require("fs");
const path = require("path");



// 사용자 정보 반환
const getUserInfo = async (req, res) => {
  try {
    const UserData = await Users.find({'ID': req.query.ID});
    return cwr.createWebResp(res, header, 200, UserData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getUserInfo error', e.message || e);
  }
}

// 강의 정보 반환
const getLectureInfo = async (req, res) => {
  try {
    const lectureData = await lecture.find({'courseId': req.query.classCode})
    return cwr.createWebResp(res, header, 200, lectureData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getLectureInfo error', e.message || e);
  }
}

// 서적 정보 반환
const getBookInfo = async (req, res) => {
  try {
    const bookData = await books.find({'ISBN': req.query.ISBN})
    return cwr.createWebResp(res, header, 200, bookData);
  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getBookInfo error', e.message || e);
  }
}

// 전공 서적별 연습문제 반환
const getExerciseInfo = async (req, res) => {
  try {
    const exerciseData = await exercise.find({'ISBN': req.query.ISBN, 'chapter': req.query.chapter});
    return cwr.createWebResp(res, header, 200, exerciseData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getExerciseInfo error', e.message || e);
  }
}

// 논문 정보 반환
const getPaperInfo = async (req, res) => {
  try {

    const paperData = await papers.find({'title': req.query.title});
    return cwr.createWebResp(res, header, 200, paperData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getPaperInfo error', e.message || e);
  }
}

// 사용자 별 강의 추천 리스트 반환
const getRecommendLectureList_semester = async (req, res) => {
  try {
    const data = await rating.aggregate([
      {
        $lookup: {
          from: "lectures",
          localField: "course_id",
          foreignField: "courseId",
          as: "course",
        },
      },
      { $unwind: "$course" },
      {
        $project: {
          course_id: 1,
          courseName: "$course.courseName",
          semester: "$course.semester",
          credit: "$course.credit",
          grade: 1,
          major: 1,
          keywords: 1,
          ratings: 1

        }
      },
      {$sort: {semester: -1, ratings: -1}},
    ])
    return cwr.createWebResp(res, header, 200, data);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getRecommendPaperList error', e.message || e);
  }
}

// 이수체계도 추천 시스템
const getRecommendLectureList = async (req, res) => {
  try {
    const data = await rating.aggregate([
      {
        $lookup: {
          from: "lectures",
          localField: "course_id",
          foreignField: "courseId",
          as: "course",
        },
      },
      { $unwind: "$course" },
      {
        $project: {
          course_id: 1,
          courseName: "$course.courseName",
          semester: "$course.semester",
          credit: "$course.credit",
          grade: 1,
          major: 1,
          keywords: 1,
          ratings: 1

        }
      },
      {$sort: {ratings: -1}},
      { $limit : Number(req.query.count) }
    ])


    return cwr.createWebResp(res, header, 200, data);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getRecommendPaperList error', e.message || e);
  }
}


// 논문 이름을 기준으로 검색
const searchPapers = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const paperData = await papers.find({"title": {$regex: keyword}}).limit(req.query.count);

    return cwr.createWebResp(res, header, 200, paperData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'searchPapers failed', e.message || e);
  }
}

// 서적 이름을 기준으로 검색
const searchBooks = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const bookData = await papers.find({"title": {$regex: keyword}}).limit(req.query.count);

    return cwr.createWebResp(res, header, 200, bookData);

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'searchBooks failed', e.message || e);
  }
}



// 사용자별 전공 서적 추천 리스트 반환
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

// 사용자별 논문 추천 리스트 반환
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

// 사용자별 전공 서적 연습문제 추천 리스트 반환
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

// 사용자별 키워드 추가/수정
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

// 사용자별 키워드 삭제
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

// 사용자별 강의 평점 등록
const postRate = async (req, res) => {
  try {
    const userData = Users.findOne({'student_id': req.body.student_id})
    rating2.updateOne({'student_id': req.body.student_id, 'course_id': req.body.course_id},
      {
        'student_id': req.query.student_id,
        'course_id': req.body.course_id,
        'grade': userData.grade,
        'major': userData.major,
        'keywords': userData.keywords,
        'rating': req.body.rating
      },
      {upsert: true}).catch(err=> {console.log(err)});
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
  getRecommendLectureList_semester,
  getRecommendBookList,
  getRecommendPaperList,
  getRecommendExerciseList,
  postUserKeywords,
  deleteUserKeywords,
  postRate,
  searchPapers,
  searchBooks
}