const AuthorController = require('../controllers/authors.controllers')

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.post('/api/authors', AuthorController.createAuthor)
    app.get('/api/authors/:id', AuthorController.oneAuthor)
    app.put('/api/authors/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}