var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./config.js');
var User = require('../database.js');
var moment = require('moment');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/../../public/'));

app.use(bodyParser.json());

//authentication middleware
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//add a new user
//http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/
app.post('/signup', function(req, res) {
//console.log('signing up', req.body.user);
  User.register(new User({ username: req.body.username}), req.body.password, function(err, user) {
    if(err) {
      console.error(err);
    }
    passport.authenticate('local')(req, res, function () {
      res.status(200).send('logged in');
    });
  });
});

//sign in a new user
app.post('/signin', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
})

//add a new task for a user
app.post('/tasks/:username', passport.authenticate('local'), function(req, res) {
  User.findOneAndUpdate(
    {user: req.params.username},
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
        res.status(204).send('created new task');
      }
    }
  );
});

//get all tasks for a user
app.get('/tasks/:user', passport.authenticate('local'), function(req, res) {
  User.findOne({username: req.params.username})
    .then(function(user) {
      console.log(user);
      res.send(user.tasks);
    })
    .catch(function(err) {
      console.error(err);
    });
});

module.exports = app;