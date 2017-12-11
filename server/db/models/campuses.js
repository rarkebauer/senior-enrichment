const db = require('../index');
const Sequelize = require('sequelize');
const Student = require('./students')

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

//pre destroy hook
Campus.hook('beforeDestroy', campus => {
  const campusId = campus.getDataValue('id');
  campus.getStudents(campusId).then((students) => {
    return students.forEach((student) => student.destroy())
  })
})

Campus.prototype.getStudents = function(campusId) {
  return Student.findAll({
    where: {
      campusId
    }
  }).then(students => {
    return students;
  })
}


module.exports = Campus;
