const Product = require('../models/product');

exports.getAll = exports.getAll = (req, res, next) => {
    res.status(200).json(Product.getAll());
}

exports.edit = (req, res) => {
    const editedProd = new Product(req.params.id, req.body.name, req.body.price, req.body.image, req.body.stock).edit();
    res.json(editedProd);
}