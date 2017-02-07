var mongoose = require('mongoose');

//var databasepath = 'mongodb://localhost/whathaveidone';
var databasepath = '';
mongoose.connect(databasepath);

var db = mongoose.connection;

module.exports = db;