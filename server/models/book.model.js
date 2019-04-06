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

BookSchema.post('save', function(doc, next) {
  // document id is updated
  // console.log('book post save', doc);
  return next()
})

module.exports = mongoose.model('Book', BookSchema);