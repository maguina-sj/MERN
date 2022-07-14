const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost/products2-db"
const dbName = 'products2-db'
mongoose.connect(mongoURI + dbName)
    .then(() => console.log(`Connected to the ${dbName}`))
    .catch((err) => console.log(`ERROR IN CONNECTING TO DB`, err) );