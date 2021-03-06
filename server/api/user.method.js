var passport = require('passport');
var config = require('../config/database.config');
require('../config/passport.config')(passport);
var jwt = require('jsonwebtoken');
var User = require("../models/user.model");

let signup = function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
}

let signin = function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    let nonSensitiveFields = user.toJSON();
                    delete nonSensitiveFields.password;
                    // if user is found and password is right create a token
                    var token = jwt.sign(nonSensitiveFields, config.secret);
                    // return the information including token as JSON
                    res.json({ success: true, token: 'JWT ' + token, user_id: user._id });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
}

module.exports = {
    signup: signup,
    signin: signin,
}