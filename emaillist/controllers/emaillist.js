const model = require('../models/emaillist');

module.exports = {
    index: async function(req, res) {
        // const results = await model.findAll(function(){});
        // console.log(results);

        const results = await model.findAll();

        res.render('index', {
            list: results || [] // result 가 null 인 경우 빈 배열을 넘겨서 화면에 아무것도 나오지 않게 
        });
    },
    form: function(req, res) {
        res.render('form');
    },
    add: async function(req, res) { // async -> await를 써서 비동기라는 것을 알려주는 것
        console.log(req.body);
        const results = await model.insert(req.body);
        res.redirect("/");
    }
}