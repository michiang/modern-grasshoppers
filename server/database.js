var mongoose = require('mongoose');
var moment = require('moment');

var db = require('./config/config.js');

var userSchema = mongoose.Schema({
  user: String,
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


var User = mongoose.model("User", userSchema)

userSchema.pre('save', function(next) {
  var total_time = this.tasks.end_time.diff(start_time);
  this.total_time = 11;
  next();
});

module.exports = User;

