const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost/authors-db"
const dbName = 'authors-db'
mongoose.connect(mongoURI + dbName)
    .then(() => console.log(`Connected to the ${dbName}`))
    .catch((err) => console.log(`ERROR IN CONNECTING TO DB`, err) );