var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/css", express.static(path.join(__dirname, 'public/css')));
app.use("/img", express.static(path.join(__dirname, 'public/img')));
app.use("/js", express.static(path.join(__dirname, 'public/js')));
app.use("/fonts", express.static(path.join(__dirname, 'public/fonts')));
app.use("/video", express.static(path.join(__dirname, 'public/video')));

app.use('/', indexRouter);

app.listen(1010, () => {
    console.log('CONNECTED TO PORT 1010.');
});

module.exports = app;
