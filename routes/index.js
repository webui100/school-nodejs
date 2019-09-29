const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Admin = require('../models/admin');
const URI_MONGO = 'mongodb+srv://webui100:webui100@schoolproject-tloch.azure.mongodb.net/test?retryWrites=true&w=majority'
mongoose.Promise = require('bluebird');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



mongoose.connect(URI_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    console.log('connection success')
  },
  err => {
    console.log('connection error', err)
  }
)
module.exports = router;
