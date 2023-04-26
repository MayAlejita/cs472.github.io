const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

router.get('/', productController.getAll);
router.put('/:id', productController.edit);

module.exports = router;