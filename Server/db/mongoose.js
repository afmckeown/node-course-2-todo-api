var mongoose = require('mongoose');

// Use the default es6 promise rather than 3rd party
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};