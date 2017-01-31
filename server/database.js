var mongoose = require('mongoose');
var moment = require('moment');
var passportLocalMongoose = require('passport-local-mongoose');

var db = require('./config/config.js');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  tasks: [{
    task: String,
    start_time: Date,
    end_time: Date,
    total_time: Number //minutes?

    //due_date: Date,
    //start_date: Date,
    // estimated_time: String
  }]
})


userSchema.plugin(passportLocalMongoose);


var User = mongoose.model("User", userSchema)
// UNCOMMENT TO EMPTY DATABASE
// User.remove({}, function(err) {
//   console.log('removed');
// })

userSchema.pre('save', function(next) {
  //var total_time = this.tasks.end_time.diff(start_time);
  //this.total_time = 11;
  next();
});

module.exports = User;

