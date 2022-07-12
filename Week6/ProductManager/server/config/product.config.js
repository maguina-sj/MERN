const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost/products-db"
const dbName = 'products-db'
mongoose.connect(mongoURI + dbName)
    .then(() => console.log(`Connected to the ${dbName}`))
    .catch((err) => console.log(`ERROR IN CONNECTING TO DB`, err));