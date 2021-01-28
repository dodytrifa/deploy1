'use strict';
const fs = require('fs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./models/students.json', 'utf8')
    data = JSON.parse(data)
    // console.log(data);

    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Students', data, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Students', null, {});

  }
};
