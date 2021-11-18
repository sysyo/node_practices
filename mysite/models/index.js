const {Sequelize} = require('sequelize'); // 객체를 하나 만들어서 리턴해줌

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env_DB_PORT,
    dialect: 'mysql'
});

// Sequelize 추가 (함수 객체 생성) 
// const sequelize = new Sequelize({}); // DB 정보를 넣어서 셋팅

// Mapping 객체 import / Import Mapping Object
const User = require('./User')(sequelize);

// DB에 반영 (DDL)
User.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

// Export Mapping Object
module.exports = {User};