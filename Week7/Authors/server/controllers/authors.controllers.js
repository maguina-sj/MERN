const Author = require('../models/authors.models');

module.exports.getAllAuthors = (req,res) => {
    Author.find({})
    .then( allAuthors => {
        res.json(allAuthors)
    })
    .catch( (err) => {
        console.log('ERROR IN FINDING ALL', err);
        res.status(400).json(err)
})
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(newProduct => {
        res.status(201).json(newProduct);
    })
    .catch(err => res.status(400).json(err))
}

module.exports.oneAuthor = (req,res) => {
    Author.findOne({_id:req.params.id})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
    .then(deleteAuthor => res.json(deleteAuthor))
    .catch(err => res.status(400).json(err))
}