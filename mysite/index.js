const http = require('http');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

// const port = 8080; - 없애도 됨 (app.env에 환경 변수 셋팅)

// 1. Environment Variables (환경변수 셋팅) - app.env 적어주기
dotenv.config({
    path: path.join(__dirname, 'config/app.env') });

// Application Setup
const application = express()
    // 1. static resources
    .use(express.static(path.join(__dirname, 'public')))

    // 2. request body parser
    .use(express.urlencoded({extended: true}))  // application/x-www-form-urlencoded
    .use(express.json())                       // application/json

    // 3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

    // 4. request router
    .all('*', function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();
    });
    // .use('/', emaillistRouter);

// Server Setup
http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${process.env.PORT}`);
    })
    .on('error', function(error){
        switch(error.code) {
            case 'EACCESS':
                console.error(`${process.env.PORT} requires privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${process.env.PORT} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;        
        }
    })
    .listen(process.env.PORT);