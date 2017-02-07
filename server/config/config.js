var mongoose = require('mongoose');

var databasepath = 'mongodb://localhost/whathaveidone';

mongoose.connect(databasepath);

var db = mongoose.connection;

module.exports = db;