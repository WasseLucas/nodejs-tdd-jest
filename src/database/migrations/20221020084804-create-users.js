'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('users',{
      //id user
      id:{
        type: Sequelize.INTERGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      //user name
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      //user password
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      update_at:{
        type: Sequelize.DATE,
        allowNull:false,
      }
    });
  },

  down (queryInterface, Sequelize) {
    
     return queryInterface.dropTable('users');
     
  }
};
