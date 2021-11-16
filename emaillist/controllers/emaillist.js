const model = require('../models/emaillist');

module.exports = {
    index: function(req, res) {
        const result = model.findAll();
        res.render('index', {
            list : result || [] // result 가 null 인 경우 빈 배열을 넘겨서 화면에 아무것도 나오지 않게 
        });
    }
}