var Promise = require('bluebird');
var {
  db,
  Student,
  Campus
} = require('./db/models');

var campusData = {
  campus: [
  {
    name: 'Mars University',
    description: 'The Planet Express crews latest mission is to deliver a crate to Professor Farnsworths office at Mars University. While touring the campus, Bender comes across a chapter of his old fraternity, Epsilon Rho Rho.'
 },
 {
   name: 'Springfield University',
   description: 'Springfield University was founded in 1952 and lacks a Latin motto. Sadgasm\'s first concert was at Springfield University.'
 }
]}

var data = {
  student: [
    {
      firstName: 'Bender',
      lastName: 'Bending-Rodriguez',
      email: 'bender@bending.com',
      gpa: 0.0,
      campusId: 1
    },
    {
      firstName: 'Philip',
      lastName: 'Fry',
      email: 'fry@pizza.com',
      gpa: 0.0,
      campusId: 1
    },
    {
      firstName: 'Homer',
      lastName: 'Simpson',
      email: 'mmm@beer.com',
      gpa: 0.0,
      campusId: 2
    },
    {
      firstName: 'Anton',
      lastName: 'Lubchenko',
      email: 'ow@myleg.com',
      gpa: 2.0,
      campusId: 2
    }
  ]
};

db
 .sync({force: true})
 .then(function() {
  console.log('Dropped old data, now inserting data');
   return Promise.map(Object.keys(campusData), function(campus) {
    return Promise.map(campusData[campus], function(item) {
      return db.model(campus).create(item);
    });
   })
 })
 .then(function() {
   return Promise.map(Object.keys(data), function(name) {
    return Promise.map(data[name], function(item) {
      return db.model(name).create(item);
    });
  });
 })
 .then(function() {
  console.log('Finished inserting data');
})
.catch(function(err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function() {
  db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
});

