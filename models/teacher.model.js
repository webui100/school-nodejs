const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    avatar: String,
    firstname: String,
    lastname: String,
    patronymic: String,
    login: String,
    email: String,
    phone: String,
    password: String,
    permissionLevel: Number,
    role: String,
  }, {
    collection: 'teachers'
  });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;