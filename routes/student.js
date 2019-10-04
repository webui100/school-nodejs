const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student.model');
mongoose.Promise = require('bluebird');

const db = mongoose.connection

/* GET home page. */
router.get('/', async (request, response) => {
    try {
        const student = await Student.find().exec()
        response.send(student)
    } catch (error) {
        response.send(error)
    }
});

router.get('/:id', async (request, response) => {
    try {
        const student = await Student.findById(request.params.id).exec()
        response.send(student)
    } catch (error) {
        response.send(error)
    }
});

router.post('/', async (request, response) => {
    try {
        const student = new Student(request.body);
        const result = await student.save();
        response.send(result)
    }
    catch (error) {
        response.send({
            status: "Error"
        })
    }
});

router.put('/:id', async (request, response) => {
    try {
        const student = await Student.findById(request.params.id).exec();
        student.set(request.body)
        const result = await student.save()
        response.send(result)
    }
    catch (error) {
        response.status(500).send(error)
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const result = await Student.findByIdAndDelete({_id: request.params.id}).exec();
        response.send(result);
    }
    catch (error) {
        response.status(500).send(error)
    }
})


module.exports = router;