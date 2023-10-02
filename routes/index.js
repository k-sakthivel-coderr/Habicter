// Requiring express
const express = require('express');
// Calling router function
const router = express.Router();
// Requiring controllers index
const Controller = require('../conrollers/index');
// router for initialize home page
router.get('/', Controller.home);
// initialize create file of routes 
router.use('/create', require('./create'));
// exporting router
module.exports = router;