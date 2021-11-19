// Sequelize 사용법
const {DataTypes} = require('sequelize');

module.exports = function(sequelize){   
    return sequelize.define('User', {   // User라는 객체는 다음과 같이 정의되어 있다라는 것
        no: {
            field: 'no',                 // 객체에 대한 속성
            type: DataTypes.BIGINT(11),  // field : 컬럼 이름  
            primaryKey: true,
            autoIncrement: true    
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            allowNull: false    
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(200),
            allowNull: false            
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(45),
            allowNull: false            
        },
        gender: {
            field: 'gender',
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false            
        },
        role: {
            field: 'role',
            type: DataTypes.ENUM('USER', 'admin'),
            allowNull: false,
            defaultValue: 'USER'            
        }                         
     }, {
         underscored: true,         // ex) DB 컬럼명 -> hi_hello 이걸 hiHello 이런 식으로 잘 먹게
         freezeTableName: true,     // 테이블 이름 고정
         timestamps: false,         // 테이블 만들 때 자동으로 timestamps 안 생기게 
         createdAt: false,          // 어느정도 (데이터가 쌓이면) 안정화되는 시기에 true로 변경
         updatedAt: false,          // 만약 인증 때문에 role같은 게 추가되는 상황에 / 크게 문제는 없음
         tableName: 'user'
     });     
}



// module.exports = User;

// ----------- 사용 예시 ---------------
// User.create({

// })

// User.findOne({where: ... })

