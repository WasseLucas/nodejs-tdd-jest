const { Sequelize, DataTypes, STRING } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {

    const User = Sequelize.define("User", {

        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,

    });

    return User;
};