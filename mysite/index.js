const http = require('http');
const path = require('path');
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const multer = require('multer');

// const mainRouter = require('./routes/main'); -> index.js 로 옮기기
// const userRouter = require('./routes/user');

// const port = 8080; - 없애도 됨 (app.env에 환경 변수 셋팅)

// 1. Environment Variables (환경변수 셋팅) - app.env 적어주기
dotenv.config({path: path.join(__dirname, 'config/app.env') });
dotenv.config({path: path.join(__dirname, 'config/db.env') });

// 2. Application Routers
const { applicationRouter } = require('./routes');
const { SIGTERM } = require('constants');

// 3. Logger
const logger = require('./logging');

// 4. Application Setup
const application = express()
    // 4-1. Session Environment
    .use(session({
        secret: "mysite-session",
        resave: false 
    })) 
    // 4-2. request body parser
    .use(express.urlencoded({extended: true}))  // application/x-www-form-urlencoded
    .use(express.json())                        // application/json
    // 4-3. Multipart
    .use(multer({
        dest: path.join(__dirname, process.env.MULTER_TEMPORARY_STORE)
    }).single('file'))
    // 4-4. static resources
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
    // 4-5. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs');

// 5. Application Router Setup
applicationRouter.setup(application);

// 6. Server Setup
http.createServer(application)
    .on('listening', function(){
        logger.info(`http server runs on ${process.env.PORT}`);
    })
    .on('error', function(error){
        switch(error.code) {
            case 'EACCESS':
                logger.error(`${process.env.PORT} requires privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                logger.error(`${process.env.PORT} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;        
        }
    })
    .listen(process.env.PORT);