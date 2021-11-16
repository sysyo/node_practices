
const express = require('express');
const controller = require('../controllers/emaillist'); // emailllist 모듈에서 인덱스 함수를 만들어서...


// url mapping 설계
const router = express.Router();
router.route('').get(controller.index);       // .use('/', emaillistRouter);로 들어올 때
// 안만들었으니까 막기
router.route('/add').get(controller.form);      // get방식 - addForm을 보여줌
router.route('/add').post(controller.add);

module.exports = router;