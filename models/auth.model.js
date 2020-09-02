const crypto = require('crypto')
const Sequelize = require('sequelize');
const db = require('../config/db');


//User schema 
module.exports = db.define(
    'users',
    {
        user_id:{
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
       email:{
           type: Sequelize.STRING
       },
       password:{
           type: Sequelize.STRING,
       },
       title:{
        type: Sequelize.STRING
       },
       first_name:{
        type: Sequelize.STRING
       },
       last_name:{
        type: Sequelize.STRING
       },
       degree:{
        type: Sequelize.STRING
       },
       phone:{
        type: Sequelize.STRING
       },
       position:{
        type: Sequelize.STRING
       },
       institution:{
        type: Sequelize.STRING
       },
       departement:{
        type: Sequelize.STRING
       },
       address_institution:{
        type: Sequelize.STRING
       },
       city:{
        type: Sequelize.STRING
       },
       state_provaince:{
        type: Sequelize.STRING
       },
       postal_code:{
        type: Sequelize.STRING
       },
       country:{
        type: Sequelize.STRING
       },
       reviewer:{
        type: Sequelize.BOOLEAN
       },
       resetpasswordlink:{
        type: Sequelize.STRING
       },
       fields:{
        type: Sequelize.ARRAY(Sequelize.TEXT)
       },
    },{
        timestamps: false,
        freezeTableName: true
      })

