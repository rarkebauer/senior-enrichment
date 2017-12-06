const router = require('express').Router();
const Student = require('../db/models/students')

// route at /api/students
router.get('/', (req, res, next) => {
  res.send('some shit')
});

// post a new student
router.post('/', (req, res, next) => {
  Student.create(req.body)
   .then(newStudent => {
     res.status(201).json(newStudent)
   })
})

//update a student including which campus a student is assigned to
router.put('/:id', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.id
    }
  }).then(foundStudent => {
    foundStudent.update(req.body)
  }).then(student => {
    const response = {
          message: 'Updated successfully',
          student: student
        }
    res.json(response)
  })
  .catch(next)
})

//delete a student by id
router.delete('/:id', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.id
    }
  }).then(deletedStudent => {
    deletedStudent.destroy()
    res.status(202).json({
      deleted: deletedStudent
    })
  })
})

module.exports = router;

/*
POST ROUTES
curl -H "Content-Type: application/json" -X POST -d '{"firstName":"Rachel","lastName":"b","email":"r@a.com","gpa":"4.0","campusId":"1"}' http://localhost:1337/api/student

curl -H "Content-Type: application/json" -X POST -d '{"firstName":"Bender","lastName":"Bender","email":"b@b.com","gpa":"0.0", "campusId":"2"}' http://localhost:1337/api/student

DELETE ROUTE
curl -H "Content-Type: application/json" -X DELETE http://localhost:1337/api/student/1

PUT ROUTE

Actions: as a user I...

x can create a campus
can edit a campus's info, including adding/removing a student to/from that campus
x can delete a campus
x can create a student
can edit a student's info, including the campus that student is assigned to
x can delete a student
*/
