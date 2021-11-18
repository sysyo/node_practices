// const mainRouter = require('./routes/main');
// const userRouter = require('./routes/user');

const errorRoute = require('./error');

const applicationRouter = {
    setup: function(application) {

        // const site = models.Site.findOne();

        application
            // 4. request router
            .all('*', function(req, res, next){
                res.locals.req = req; // 전역으로 사용할 수 있게 만들기 -> ex) user.js -> join.ejs
                res.locals.res = res;
                next();
            })

            // .use('/', mainRouter)
            // .use('/user', userRouter);
            .use('/', require('./main'))
            .use('/user', require('./user'))

            .use(errorRoute.error404)
            .use(errorRoute.error500)


            .siteTitle = 'MySite';


    }
}

module.exports = { applicationRouter }

