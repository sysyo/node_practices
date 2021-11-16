const express = require('express'); // index.js 안의 express 가져옴

const router = express.Router();

// user?no=10
router.route("").get(function(req, res){
    res.render('user/info', {
        no: req.query.no || 0
    }); // 템플릿으로 가는 거 - 템플릿 엔진들이 익스프레스 지원
});

router.route("/info/:no").get(function(req, res){
    res.render('user/info', {
        no: req.params.no || 0
    });

});

router.route("/join").get(function(req, res){
    res.render('user/join');
});

router.route("/join").post(function(req, res){
    console.log(req.body);
    res.redirect("/");
});

router.route("/api").get(function(req, res){
    const vo = {
        no: 10,
        name: '둘리',
        email: 'dooly@gmail.com',
        gender: 'male'
    };
    
    res.writeHead(200, {
        'Content-Type': "application/json"
    });
    res.end(JSON.stringify(vo));



    // res.send(vo);
    

});


module.exports = router;

