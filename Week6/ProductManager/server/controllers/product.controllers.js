const Product = require('../models/product.models')

const createProduct = (req,res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.status(201).json(newProduct);
    })
    .catch((err) => console.log('Error in CREATE', err));
}

const getAllProducts = (req,res) => {
    Product.find({})
    .then((allProducts) => {
        res.status(200).json(allProducts);
    })
    .catch((err) => console.log('ERROR IN FINDING ALL', err));
};


module.exports = {
    createProduct,
    getAllProducts
};