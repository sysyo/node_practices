const models = require('../models');
const { Op } = require('sequelize');

module.exports = { // model 사용 -> async 필요
    create: async function(req, res, next) {
        try {
            const result = await models.Guestbook.create(req.body);
            res.send({
                result: 'success',
                data: result,
                message: null
            });
        } catch(e) {
            next(e);
        }
    },
    read: async function(req, res, next) {
        try {
            const startNo = req.query.sno || 0;
            const results = await models.Guestbook.findAll({
                attributes: ['no', 'name', 'message'],
                where: (startNo > 0) ? {no: {[Op.lt]: startNo}} : {}, // index-spa.ejs의  url: '/api/guestbook?sno=' + startNo
                order: [
                    ['no', 'desc']
                ],
                limit: 3        
            });

            res.send({
                result: 'success',
                message: null,
                data: results
            });
        } catch(e) {
            next(e);
        }
    },
    delete: async function(req, res, next) {
        try {
            await models.Guestbook.destroy({
                where: {
                    [Op.and]: [{no: req.params.no}, {password: req.body.password}]
                }
            });

            res.send({
                result: 'success',
                message: null,
                data: req.params.no 
            });
        } catch(e) {
            next(e);
        }
    }
}