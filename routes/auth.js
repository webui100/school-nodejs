const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Teacher = require('../models/teacher.model');
mongoose.Promise = require('bluebird');

const db = mongoose.connection

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi'});
  console.log(mongoose.Collection())
});
module.exports = router;
