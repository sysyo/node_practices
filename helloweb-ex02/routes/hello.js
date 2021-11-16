const express = require('express'); // index.js 안의 express 가져옴

const router = express.Router();

router.route("/01").get(function(req, res){
    res.render("hello/01"); // 템플릿으로 가는 거 - 템플릿 엔진들이 익스프레스 지원
});

router.route("/02").get(function(req, res){
    const data = {
        no: req.query.no || '',
        email: req.query.email || ''
    };

    res.render("hello/02",data); // 템플릿으로 가는 거 - 템플릿 엔진들이 익스프레스 지원
});

module.exports = router;