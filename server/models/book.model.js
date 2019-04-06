var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Book', BookSchema);