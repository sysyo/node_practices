const errorRoute = require('./error');

const applicationRouter = {
    setup: function(application) {
        
        //const site = models.Site.findOne();

        application
            .all('*', function(req, res, next){ // 전역으로 사용할 수 있게 만들기 -> ex) user.js -> join.ejs
                res.locals.req = req;
                res.locals.res = res;
                next();
            })

            .use('/',  require('./main'))
            .use('/user', require('./user'))
            .use('/guestbook', require('./guestbook'))
            .use('/api/guestbook', require('./guestbook-api'))
            .use('/gallery',require('./gallery'))

            .use(errorRoute.error404)
            .use(errorRoute.error500)

            .siteTitle = 'MySite';
    }
}

module.exports = { applicationRouter }
