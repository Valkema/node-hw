'use strict';

function generate_groupstuds_seed() {
  const groupstuds = [];
  for (let i = 1; i < 11; i++) {
    groupstuds.push({
      name: `Name${i}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return groupstuds;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GroupStud', generate_groupstuds_seed(), {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GroupStud', null, {});
  },
};