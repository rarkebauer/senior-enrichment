const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: Sequelize.UUIDV1
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus;
