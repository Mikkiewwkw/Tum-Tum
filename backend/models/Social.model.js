'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Social', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true	
    },
  });
}
