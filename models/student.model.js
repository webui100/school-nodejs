const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    avatar: String,
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    patronymic: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    email: String,
    phone: String,
    password: String,
    permissionLevel: Number,
    class: String,
    role: String,
  }, {
    collection: 'students'
  });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;