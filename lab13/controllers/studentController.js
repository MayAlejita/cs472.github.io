const Student = require('../models/student');

exports.save = (req, res, next) => {
    const newStu = new Student(req.body.id, req.body.name).save();
    res.status(201).json(newStu);
};

exports.edit = (req, res, next) => {
    const editStu = new Student(req.body.id, req.body.name).edit();
    res.json(editStu);
};

exports.getAll = (req, res, next) => {
    res.status(200).json(Student.getAll())
};

exports.findById = (req, res, next) => {
    res.json(Student.findById(req.params.idStudent));
};

exports.deleteById = (req, res, next) => {
    res.json(Student.deleteById(req.params.idStudent));
};