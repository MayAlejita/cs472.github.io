const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.get('/', courseController.getAll);
router.get('/:idCourse', courseController.findById);
router.post('/', courseController.save);
router.put('/:idCourse', courseController.edit);
router.delete('/:idCourse', courseController.deleteById);

module.exports = router;

