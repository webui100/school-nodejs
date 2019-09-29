const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    login: String,
    password: String
  });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;