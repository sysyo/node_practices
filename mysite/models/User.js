// Sequelize 사용법

const {Sequelize, DataTypes} = require('sequelize'); // 객체를 하나 만들어서 리턴해줌

// Sequelize 추가 (함수 객체 생성) 
const sequelize = new Sequelize({}); // DB 정보를 넣어서 셋팅

const User = sequelize.define('User', {      // User라는 객체는 다음과 같이 정의되어 있다라는 것
    no: {                       // 객체에 대한 속성
        field: 'no',            // field : 컬럼 이름
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        
    },
    email: {

    }
}, { 
    underscored: true,
    freezeTableName: true,   // 테이블 이름 고정
    timestamps: false,       // 테이블 만들 때 자동으로 timestamps 안 생기게 
    createdAt: false,        // 어느정도 (데이터가 쌓이면) 안정화되는 시기에 true로 변경
    updateAt: false,         // 만약 인증 때문에 role같은 게 추가되는 상황에 / 크게 문제는 없음
    tableName: 'user'
}) 

// 사용 예시 
// User.create({

// })

// User.findOne({where: ... })