var passport = require('passport');
require('../config/passport.config')(passport);
var Book = require("../models/book.model");

let update_book = function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        // console.log(req.headers.user_id);
        var newBook = new Book({
            user_id: req.headers.user_id,
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher
        });

        newBook.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Save book failed.' });
            }
            res.json({ success: true, msg: 'Successful created new book.' });
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
}

let get_book = function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        // console.log("booklist u_id",req.headers.user_id)
        Book.find({user_id: req.headers.user_id},function (err, books) {
            if (err) return next(err);
            res.json(books);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
}

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = {
    update_book: update_book,
    get_book: get_book,
}