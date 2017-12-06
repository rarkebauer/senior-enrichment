const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    validate: {min: 0.0, max: 4.0}
  }
}, {
  getterMethods: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
})

module.exports = Student;
