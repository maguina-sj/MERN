require('./config/mongoose.config');

const express = require('express')
const app = express()
app.use(express.json())
const PORT = 8000;
require("./routes/jokes.routes")(app)


app.listen(8000, () => console.log('The server is all fired up on port 8000'))