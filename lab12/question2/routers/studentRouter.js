const express = require('express');
const Student = require("../models/student");


const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json(Student.getAll());
});

router.get('/:studentId', (req, res, next) => {
    res.json(Student.findById(req.params.studentId));
});


router.post('/', (req, res, next) => {
    const addedStu = new Student(req.body.id, req.body.name).save();
    res.status(201).json(addedStu);
});


router.delete('/:studentId', (req, res, next) => {
    res.json(Student.deleteById(req.params.studentId));
});

router.put('/:studentId', (req, res, next) => {
    const editedStu = new Product(req.params.studentId, req.body.name).edit();
    res.json(editedStu);
});


module.exports = router;