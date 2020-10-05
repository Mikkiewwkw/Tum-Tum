'use strict'

module.exports = ((models) => {
  // FK between Buddy and User - One to Many
  // models.Buddy.hasMany(models.User, { foreignKey: 'buddyId' });
  // models.User.belongsTo(models.Buddy, { foreignKey: 'buddyId' });
  // A specific foreign key column name is not required since we are 
  // using the default fk name 'buddyId' in this case. 
  // To create the foreign key column automatically, we cannot leave 
  // a column with the same name in the model definition.
  models.Buddy.hasMany(
    models.User,
    { foreignKey: { allowNull: false }, onDelete: 'CASCADE' }
  );
  models.User.belongsTo(
    models.Buddy,
    { foreignKey: { allowNull: false }, onDelete: 'CASCADE' }
  );

  // Relation Table for User and Social - Many to Many
  models.User.belongsToMany(
    models.Social, 
    { through: models.User_Social }
  );
  models.Social.belongsToMany(
    models.User, 
    { through: models.User_Social }
  );
});
