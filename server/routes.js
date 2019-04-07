var passport = require('passport');
require('./config/passport.config')(passport);
var express = require('express');
var router = express.Router();

let user_methods = require("./api/user.method");
let book_methods = require("./api/book.method");

router.post('/signup', user_methods.signup);

router.post('/signin', user_methods.signin);

router.get('/books', passport.authenticate('jwt', { session: false }), book_methods.get_books);

router.get('/book', passport.authenticate('jwt', { session: false }), book_methods.get_book);

router.post('/book', passport.authenticate('jwt', { session: false }), book_methods.create_book);

router.put('/book', passport.authenticate('jwt', { session: false }), book_methods.update_book);

module.exports = router;