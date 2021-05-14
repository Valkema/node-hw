'use strict';

module.exports = (sequelize, DataTypes) => {
  const GroupStud = sequelize.define(
    'GroupStud',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  
  GroupStud.associate = function (models) {
    GroupStud.hasMany(models.Student, {
      foreignKey: {
        field: 'groupId',
      },
      as: 'student',
    });
  };
  return GroupStud;
};