const Shoppingcart = require('../models/shoppingcart');

exports.save = (req, res, next) =>{
    const shop = new Shoppingcart(req.body.username, req.body.quantity, req.body.total, req.body.id, req.body.name, req.body.price,
        req.body.image, req.body.stock).save(req.body.id, req.body.username);
    res.json(shop);
}

exports.findByUser = (req, res, next) =>{
    res.json(Shoppingcart.findByUser(req.params.username));
}

exports.deleteShopping = (req, res, next) => {
    res.json(Shoppingcart.deleteShopping(req.params.user));
}