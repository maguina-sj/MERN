const jokeController = require('../controllers/jokes.controller')

module.exports= (app) => {
    app.get('/api/jokes', jokeController.getAllJokes);
    app.post('/api/jokes', jokeController.createJoke);
    app.get('/api/jokes/:id', jokeController.getJokeById);
    app.put('/api/jokes/:id', jokeController.updateJokeById);
    app.delete('/api/jokes/:id', jokeController.deleteJokeById);
}