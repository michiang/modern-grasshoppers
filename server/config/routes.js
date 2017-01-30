var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./config.js');
var User = require('../database.js');
var moment = require('moment');

var app = express();

app.use(express.static(__dirname + '/../../public/'));

app.use(bodyParser.json());

//add a new user
app.post('/signup', function(req, res) {
  //post new task to db
  //check if username exists
  var user = new User({
    user: req.body.user,
    //password: need to add authentication
  });
  user.save(function(err, user) {
    if(err) {
      return console.error(err);
    } else {
      res.status(201).send('created new user');
    }
  });
});

//sign in a new user

//add a new task for a user
app.post('/tasks/:user', function(req, res) {
  User.findOneAndUpdate(
    {user: req.params.user},
    {$push: {tasks:
      {task: req.body.task,
       start_time: req.body.start_time,
       end_time: req.body.end_time,
       //total_time
       total_time: moment(req.body.end_time).diff(moment(req.body.start_time), 'minutes')
      }}
    },
    {upsert: true, new: true},
    function(err, doc) {
      if(err) {
        return console.error(err);
      } else {
        res.status(201).send('created new task');
      }
    }
  );
});

//get all tasks for a user
app.get('/tasks/:user', function(req, res) {
  User.findOne({user: req.params.user})
    .then(function(user) {
      console.log(user);
      res.send(user.tasks);
    })
    .catch(function(err) {
      console.error(err);
    });
});


module.exports = app;