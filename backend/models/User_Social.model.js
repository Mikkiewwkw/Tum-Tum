'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User_Social', {
    userIdFromSocial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    extra: {
      type: DataTypes.JSON,
      allowNull: true
    },
  }, {
    timestamps: false
  });
}
