'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const student = require('./student')
const campus = require('./campus')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

	// apiRouter.get('/students', function(req, res, next) {
	// 	res.send('some shit')
	// });
apiRouter.use('/student', student);
apiRouter.use('/campus', campus);

apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))


//
// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;
