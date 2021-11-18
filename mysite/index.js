const http = require('http');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

// const mainRouter = require('./routes/main'); -> index.js 로 옮기기
// const userRouter = require('./routes/user');


// const port = 8080; - 없애도 됨 (app.env에 환경 변수 셋팅)

// 1. Environment Variables (환경변수 셋팅) - app.env 적어주기
dotenv.config({path: path.join(__dirname, 'config/app.env') });

// 2. Application Routers
const { applicationRouter } = require('./routes');

// 3. Logger
const logger = require('./logging');

// 4. Application Setup
const application = express()

    // 4-1. static resources
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))

    // 4-2. request body parser
    .use(express.urlencoded({extended: true}))  // application/x-www-form-urlencoded
    .use(express.json())                        // application/json
    
    // 4-3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs');

    // 4-4. request router
    // .all('*', function(req, res, next){
    //     res.locals.req = req;
    //     res.locals.res = res;
    //     next();
    // });

// 5. Application Router Setup
    // .use('/', mainRouter)
    // .use('/user', userRouter); -> routes/index.js
    applicationRouter.setup(application);

    // 6. Server Setup
    http.createServer(application)
        .on('listening', function(){
            logger.info(`http server runs on ${process.env.PORT}`); // console.info 에서 변경
        })
        .on('error', function(error){
            switch(error.code) {
                case 'EACCESS':
                    logger.error(`${process.env.PORT} requires privileges`); // console.error에서 변경
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    logger.error(`${process.env.PORT} is already in use`); // console.error에서 변경
                    process.exit(1);
                    break;
                default:
                    throw error;        
            }
        })
        .listen(process.env.PORT);