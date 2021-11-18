const models = require('../models');

module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    join: function(req, res) {
        res.render('user/join');
    },
    _join: async function(req, res, next) {
        try {
            await models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender
            });

            res.redirect('/user/joinsuccess');

        } catch(e) {
            next(e);
        }
    }

}