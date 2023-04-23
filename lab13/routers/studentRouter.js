const express = require('express');
const studentController = require("../controllers/studentController");

const router = express.Router();

router.get('/', studentController.getAll);
router.get('/:idStudent', studentController.findById);
router.post('/', studentController.save);
router.put('/:idStudent', studentController.edit);
router.delete('/:idStudent', studentController.deleteById);

module.exports = router;