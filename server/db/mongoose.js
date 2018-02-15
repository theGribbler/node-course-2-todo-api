var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONDGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
