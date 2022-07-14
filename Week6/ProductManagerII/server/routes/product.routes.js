const ProductController = require('../controllers/product.controllers')

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts)
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products/:id', ProductController.oneProduct)
}