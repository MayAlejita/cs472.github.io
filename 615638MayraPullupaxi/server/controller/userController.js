const User = require('../models/user');

exports.findUser = (req, res, next) => {
    const user = User.findUser(req.body.username, req.body.password);
    if(user){
        res.json({accessToken: `${user.id}-${user.username}-${Date.now().toString()}`,username:user.username})
    } else {
        res.json({error: 'Invalid username and password!'});
    }
}
