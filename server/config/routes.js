var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// database connection

// Do we need this?
// app.use(express.static('client'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile('../../public/index.html');
  // prompt('Enter your username:');
});

app.get('/users/tasks', function(req, res) {
  // get all tasks from db
});

app.post('/users/task', function(req, res) {
  // post new task to db
});

module.exports = app;