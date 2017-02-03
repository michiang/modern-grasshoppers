var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./config.js');
var User = require('../database.js');
var moment = require('moment'); //momentjs is a library for working with dates and times

//authentication middleware
var cookieParser = require('cookie-parser');
var passport = require('passport'); //http://passportjs.org/docs/overview
var LocalStrategy = require('passport-local').Strategy; //https://github.com/jaredhanson/passport-local

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
//gives the user a cookie that contains the user's id so the session is user-specific
passport.serializeUser(User.serializeUser(function(user, done){
  done(null, user.id);
}));
passport.deserializeUser(User.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
}));

//only allows http requests to tasks to go through if a user is authenticated
//maybe move this to a different module
var checkCredentials = function(req, res, next) {
  console.log('REQ isAuthenticated', req.isAuthenticated());
  if(req.isAuthenticated()) {
    return next();
  } else {
    //res.redirect('#/signin');
  }
};

// app.get('/', checkCredentials, function(req, res) {
//   User.findOne({_id: req.user._id}) //req.user._id comes from the cookie
//     .then(function(user) {
//       res.send(user);
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
// });

//add a new user
//http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/
app.post('/signup', function(req, res) {
  console.log('signing up', req.body.username, req.body.password);
  //User.register is passport local mongoose method. It checks to see if a username already exists, and only signs the new user up
  //if it does not.
  User.register(new User({ username: req.body.username}), req.body.password, function(err, user) {
    if(err) {
      console.error(err);
    }
    passport.authenticate('local')(req, res, function () {
      //204 is the only code that yields a "success" for the ajax request
      res.status(204).redirect('/tasks');
    });
  });
});

//Sign in an existing user. Passport.authenticate checks the password and sends back the cookie if correct (using serializeUser)
app.post('/signin', passport.authenticate('local'), function(req, res) {
  //check to see what username and password is being passed in
  // console.log(req.body.password);
  // console.log(req.body.username);
  res.status(204).redirect('/tasks')
})

app.get('/signout', function(req, res) {
    req.logout();
    res.status(204).redirect('/');
});

//add a new task for a user
app.post('/tasks', checkCredentials, function(req, res) {
  User.findOneAndUpdate(
    {_id: req.user._id}, //this comes from the cookie
    //push a new task into the tasks array
    {$push: {tasks:
      {task: req.body.task,
       project: req.body.project,
       start_time: req.body.start_time,
       end_time: req.body.end_time,
       total_time: moment(req.body.end_time).diff(moment(req.body.start_time), 'minutes') //momentjs -- calculates elapsed time in minutes
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
  console.log('REQ.user', req.user);
  User.findOne({_id: req.user._id}) //req.user._id comes from the cookie
    .then(function(user) {
      res.send(user.tasks);
    })
    .catch(function(err) {
      console.error(err);
    });
});

module.exports = app;