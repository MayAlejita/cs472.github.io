const express = require('express');
const Course = require('../models/course');

const route = express.Router();

route.get('/', (req, res, next) => {
    res.status(200);
    res.json(Course.getAll());
});

route.get('/:idCourse', (req, res, next) => {
    res.json(Course.findById(req.params.idCourse));
});

route.post('/', (req, res, next) => {
    const newCourse = new Course(req.body.id, req.body.name, req.body.grade).save();
    res.status(201);
    res.json(newCourse);
});

route.use((err, req, res, next) => {
    res.status(500).send('Error in new WebServer');
});

module.exports = route;

