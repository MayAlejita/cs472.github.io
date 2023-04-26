const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();
router.post('/', userController.findUser);

// router.use((req, res, next) => {
//     const auth = req.headers.authorization;
//     // console.log();
//     const token = auth.split(' ')[1]
//     if(token === 'null'){
//         res.json({error: 'No Access Token'});
//     } else {
//         req.user = token.split('-')[0];
//         next();
//     }
// })

// router.use((error, req, res, next)=>{
//     res.status(500).json({error: 'Invalid username and password!'});
// })

module.exports = router;