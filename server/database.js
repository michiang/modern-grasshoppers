//
var mongoose = require('mongoose');
var moment = require('moment');

//use when adding a new schema
total_time = end_time.diff(start_time, 'minutes'); //--milliseconds
//displaying it again:

var userSchema = mongoose.Schema({
  user: String,
  password: String,
  tasks: [{
    task: String,
    start_time: Date,
    end_time: Date,
    total_time: Number //seconds??
    //due_date: Date,
    //start_date: Date,
    // estimated_time: String
  }]
})

var User = mongoose.model("User", userSchema)