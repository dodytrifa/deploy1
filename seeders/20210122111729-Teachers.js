'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./models/teachers.json', 'utf8')
    data = JSON.parse(data)
    // console.log(data);

    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Teachers', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
