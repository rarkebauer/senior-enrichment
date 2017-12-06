const router = require('express').Router();
const Campus = require('../db/models/campuses')
const Student = require('../db/models/students')

// /api/campus/:campusId to get a single campus
router.get('/:campusId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.id
    }
  }).then(foundCampus => {
    res.json(foundCampus)
  })
})

// route at /api/campus to get all campuses
router.get('/', (req, res, next) => {
  Campus.findAll().then(campuses => {
    res.json(campuses)
  })
})

// post a new campus to /api/campus
router.post('/', (req, res, next) => {
  Campus.create(req.body)
   .then(newCampus => {
     res.status(201).json(newCampus)
   })
})

//delete campus by id
router.delete('/:id', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.id
    }
  }).then(deletedCampus => {
    deletedCampus.destroy()
    res.status(202).json({
      deleted: deletedCampus
    })
  })
})

//remove a student from a campus by studentId
router.put('/:campusId/student/:studentId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.campusId
    },
    include: [{all: true}]
  }).then(foundCampus => {
    console.log(foundCampus)
    //foundCampus.update(req.body)
    foundCampus.findOne({
      where: {
        id: req.params.studentId
      }
    })
    //find student by id and then update the student with req.body
  })
  .then(foundStudent => {
    foundStudent.destroy();
  })
  .then(campus => {
    const response = {
          message: 'Updated successfully',
          campus: campus
        }
    res.json(response)
  })
  .catch(next)
})


module.exports = router;

/*
curl -H "Content-Type: application/json" -X POST -d '{"name":"Mars University","description":"The Planet Express crews latest mission is to deliver a crate to Professor Farnsworths office at Mars University. While touring the campus, Bender comes across a chapter of his old fraternity, Epsilon Rho Rho."}' http://localhost:1337/api/campus

DELETE ROUTE
curl -H "Content-Type: application/json" -X DELETE http://localhost:1337/api/campus/1

PUT ROUTE
can edit a campus's info, including adding/removing a student to/from that campus
curl -H "Content-Type: application/json" -X PUT -d '{"name":"Springfield A&M"}' http://localhost:1337/api/campus/2

curl -H "Content-Type: application/json" -X PUT -d '{"name":"Springfield University"}' http://localhost:1337/api/campus/2

curl -H "Content-Type: application/json" -X PUT -d '{"firstName":"Rachel","lastName":"b","email":"r@a.com","gpa":"4.0","campusId":"1"}' http://localhost:1337/api/campus/2
*/
