const mongoose = require('mongoose')

const JokesSchema = mongoose.Schema({
    setup: String,
    punchline: String
}, 
{timestamps: true});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;