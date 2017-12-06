const router = require('express').Router();
const Campus = require('../db/models/campuses')

// route at /api/campus
router.get('/', (req, res, next) => {
  res.send('some other shit')
});

// post a new campus
router.post('/', (req, res, next) => {
  Campus.create(req.body)
   .then(newCampus => {
     res.status(201).json(newCampus)
   })
})

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

module.exports = router;

/*
curl -H "Content-Type: application/json" -X POST -d '{"name":"Mars University","description":"The Planet Express crews latest mission is to deliver a crate to Professor Farnsworths office at Mars University. While touring the campus, Bender comes across a chapter of his old fraternity, Epsilon Rho Rho."}' http://localhost:1337/api/campus

DELETE ROUTE
curl -H "Content-Type: application/json" -X DELETE http://localhost:1337/api/campus/1

PUT ROUTE
can edit a campus's info, including adding/removing a student to/from that campus
*/
