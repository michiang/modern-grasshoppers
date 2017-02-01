var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./config.js');
var User = require('../database.js');
var moment = require('moment');

//authentication
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

//authentication
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//static assets
app.use(express.static(__dirname + '/../../public/'));

app.use(bodyParser.json());

//authentication middleware
passport.use(new LocalStrategy(User.authenticate()));

//http://passportjs.org/docs/configure
passport.serializeUser(User.serializeUser(function(user, done){
  done(null, user.id);
}));
passport.deserializeUser(User.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
}));

//maybe move this to a different module
var checkCredentials = function(req, res, next) {
  console.log(req.isAuthenticated());
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

//add a new user
//http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/
app.post('/signup', function(req, res) {
  console.log('signing up', req.body.username, req.body.password);
  User.register(new User({ username: req.body.username}), req.body.password, function(err, user) {
    if(err) {
      console.error(err);
    }
    passport.authenticate('local')(req, res, function () {
      res.status(204).send('signed up');
    });
  });
});

//sign in a new user
app.post('/signin', passport.authenticate('local'), function(req, res) {
  console.log('in signin');
  console.log(req.body.password);
  console.log(req.body.username);
  //res.redirect('/'); //alternate routes for if signup is successful or not?
  res.status(204).send('logged in')
})

app.get('/signout', function(req, res) {
    req.logout();
    res.status(204).send('logged out');
});

//add a new task for a user
app.post('/tasks', checkCredentials, function(req, res) {
  User.findOneAndUpdate(
    {_id: req.user._id}, //this comes from the session/cookie
    {$push: {tasks:
      {task: req.body.task,
       start_time: req.body.start_time,
       end_time: req.body.end_time,
       total_time: moment(req.body.end_time).diff(moment(req.body.start_time), 'minutes') //momentjs
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
app.get('/tasks', checkCredentials, function(req, res) {
  User.findOne({_id: req.user._id})
    .then(function(user) {
      res.send(user.tasks);
    })
    .catch(function(err) {
      console.error(err);
    });
});

module.exports = app;