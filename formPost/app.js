var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var http = require('http');
// var ws = require('ws');

const mongoClient = require('./mongo-test');

mongoClient;

dotenv.config({path: 'process.env'});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersApi = require('./routes/usersApi');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/users_reg', usersApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env || 3000;

const server = http.createServer(app);

server.listen(3000, () => {
  console.log(`Listening to the port ${3000}`)
});
process.on('uncaughtException', (err, promise) => {
  console.log(`Server Error: ${err}`);
  
  server.on('connect', (data) => {
    console.log(`User is connected to the server: ${data}`)
  });

  server.on('close', (data) => {
    console.log(`User disconnected: ${data}`);
  });

  server.close(() => {
    process.exit(1);
  })
});

module.exports = app;
