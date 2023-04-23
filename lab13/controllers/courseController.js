const Course = require('../models/course');

exports.save = (req, res, next) => {
    const newCourse = new Course(req.body.id, req.body.name, req.body.grade).save();
    res.status(201).json(newCourse);
};

exports.edit = (req, res, next) => {
    const editCourse = new Course(req.body.id, req.body.name, req.body.grade).edit();
    res.json(editCourse);
};

exports.getAll = (req, res, next) => {
    res.status(200).json(Course.getAll());
};

exports.deleteById = (req, res, next) => {
    res.json(Course.deleteById(req.params.idCourse));
};

exports.findById = (req, res, next) => {
    res.json(Course.findById(req.params.idCourse));
};