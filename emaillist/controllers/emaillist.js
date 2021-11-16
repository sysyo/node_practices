const model = require('../models/emaillist');

module.exports = {
    index: async function(req, res) {
        // const results = model.findAll(function(){});
        const results = await model.findAll(function(){});
        console.log(results);
        res.render('index', {
            list: results || [] // result 가 null 인 경우 빈 배열을 넘겨서 화면에 아무것도 나오지 않게 
        });
    }
}