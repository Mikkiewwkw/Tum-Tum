'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    tid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middlename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Either email or phone, or both
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      validate: {
        isEmail: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    // FK to Buddy table
    // buddyId: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   references: {
    //     model: 'Buddy',
    //     key: 'id',
    //   }
    // },
    // Social
    wechat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weibo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instgram: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Extra - for more user metadata
    extra: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    validate: {
      isEmailOrPhoneFilled () {
        if ((this.email === undefined || this.email === null || this.email.length == 0) && 
	    (this.phone === undefined || this.phone === null || this.phone.length == 0)) {
	  let err = new Error('Either email or phone number is required.');
	  err.name = 'MissingInfoError';
	  throw err;
	}
      }
    }
  });
}
