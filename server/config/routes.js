var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./config.js');
var User = require('../database.js')

var app = express();

// database connection

// UNCOMMENT TO EMPTY DATABASE
// User.remove({}, function(err) {
//   console.log('removed');
// })

// Do we need this?
// app.use(express.static('client'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile('../../public/index.html');
});

// get all tasks from db
app.get('/users/tasks', function(req, res) {
  User.find({})
    .then(function(tasks) {
      console.log(tasks);
      res.send(tasks);
    })
    .catch(function(err) {
      console.error(err);
    });
});

app.post('/users/tasks', function(req, res) {
  // post new task to db
  var user = new User({
    user: req.body.user,
    password: req.body.password,
    tasks: [{
      task: req.body.tasks.task,
      start_time: req.body.tasks.start_time,
      end_time: req.body.tasks.end_time
    }]
  });
  user.save(function(err, user) {
    if(err) {
      return console.error(err);
    } else {
      res.status(200).send('success');
    }
  });
});

module.exports = app;