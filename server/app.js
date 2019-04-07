var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
// var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database.config');

var api = require('./routes');
var app = express();

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

app.use(passport.initialize());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use('/api', api);

/**
 * Tell express where to serve static files
 * When express catches any route, it returns index.html then handled by angular routing
 * Production - deloying entire app by 'npm start'
 * Development - deploy the client and server separately
 * Uncomment the section below for production
 */
/*
// express.static is a built in middleware function to serve static files pointed to dist/<app-name>
app.use(express.static(path.join(__dirname, '../dist/mean-secure')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/mean-secure/index.html'));
});
*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.json({ error: err });
});

module.exports = app;