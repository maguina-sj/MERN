const mongoose = require('mongoose')

const AuthorsSchema = mongoose.Schema(
    {
    name: {
        type: String,
    required: [true, "Name is required"],
    minlength: [3, 'Name has to be at least 3 characters']},
    genre: {
        type:String,
        required:[true, "Genre is required"],
        minlength: [3, "Genre must be at least 3 characters"]
    }
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorsSchema);

module.exports = Author;

