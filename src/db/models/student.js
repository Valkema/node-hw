'use strict';

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      fullName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {}
  );

  Student.associate = function (models) {
    Student.belongsTo(models.GroupStud, {
      foreignKey: {
        field: 'groupId',
      },
      as: 'group',
    });
  };
  return Student;
};