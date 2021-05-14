'use strict';

function generate_students(groupstuds){
  const students = [];
  for (let i = 1; i < groupstuds.length+1; i++) {
    const x = Math.round(Math.random() * 10);
    for (let j = 0; j < x; j++) {
      students.push({
        fullName: `Full Name${j}`,
        age: x+15,
        email: `testemail${j}@gmail.com`,
        groupId:  groupstuds[i].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }
  return students;
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('SELECT id FROM "GroupStud"')
      .then(([results, metadata]) => {
        return queryInterface.bulkInsert('Student', generate_students(results), {});
      });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Student', null, {});
  },
};