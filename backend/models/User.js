'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    // Can use default field "id" to replace the "uid"
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wechat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apple: {
      type: DataTypes.STRING,
      allowNull: true
    },
    group: {
      type: DataTypes.UUID,
      allowNull: true
    }
  });
}
