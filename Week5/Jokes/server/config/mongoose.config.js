const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/mongo-jokes'
const dbName = 'mongo-jokes'
mongoose.connect(mongoURI + dbName)
    .then(() => console.log(`Connected to the ${dbName} db`))
    .catch((err) => console.log('ERROR IN CONNECTING TO DB', err));