const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'manav', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
