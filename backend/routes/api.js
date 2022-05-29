const express = require('express');
const ApiController =require('../controllers/mongo')
const postController = require('../controllers/network')
const mw = require('../utils/middlewares')

const router = express.Router();

router.get('/userInfo', ApiController.getUserInfo);
router.get('/lecture', ApiController.getLectureInfo);
router.get('/book', ApiController.getBookInfo);
router.get('/exercise', ApiController.getExerciseInfo);
router.get('/paper', ApiController.getPaperInfo);
router.get('/RCLecture', ApiController.getRecommendLectureList);
router.get('/RCBook', ApiController.getRecommendBookList);
router.get('/RCExercise', ApiController.getRecommendExerciseList);
router.get('/RCPaper', ApiController.getRecommendPaperList);

router.post('/postUserKeywords', ApiController.postUserKeywords);
router.post('/deleteUserKeywords', ApiController.deleteUserKeywords);

module.exports = router;