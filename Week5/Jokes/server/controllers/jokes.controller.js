const Joke = require('../models/jokes.model')

const createJoke = (req, res) => {
    Joke.create(req.body)
    .then((newJoke) => {
        res.status(201).json(newJoke);
    })
    .catch((err) => console.log('ERROR IN CREATE', err));
};

const getAllJokes = (req, res) => {
    Joke.find({})
    .then((allJokes) => {
        res.status(200).json(allJokes);
    })
    .catch((err) => console.log('ERROR IN FINDING ALL', err));
};

const getJokeById = (req, res) => {
    Joke.findById(req.params.id)
    .then((newJoke) => {
        res.status(200).json(newJoke);
    })
    .catch((err) => console.log('ERROR IN FINDING ONE', err));
};

const updateJokeById = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, {new:true})  
    .then((newJoke) => {
        res.json(newJoke);
    })
    .catch((err) => console.log('ERROR IN UPDATING ONE', err));
};

const deleteJokeById = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)    // no autofill on the methods, not sure if this is correct
    .then((newJoke) => {
        res.json(newJoke);
    })
    .catch((err) => console.log('ERROR IN DELETING ONE', err));
};

module.exports = {
    createJoke,
    getAllJokes,
    getJokeById,
    updateJokeById,
    deleteJokeById
};