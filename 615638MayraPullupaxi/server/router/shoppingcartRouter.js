const express = require('express');
const shoppingController = require('../controller/shoppingcartController');
const router = express.Router();

router.post('/',shoppingController.save);
router.get('/:username', shoppingController.findByUser);
router.delete('/:user', shoppingController.deleteShopping);

module.exports = router;