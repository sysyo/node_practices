const express = require('express'); // index.js 안의 express 가져옴

const router = express.Router();
router.route("").get(function(req, res){
    res.render("main/index"); // 템플릿으로 가는 거 - 템플릿 엔진들이 익스프레스 지원
});

module.exports = router;