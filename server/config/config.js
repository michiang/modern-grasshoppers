var mongoose = require('mongoose');

var databasepath = 'mongodb://localhost/whathaveidone';
//var databasepath = 'mongodb://heroku_d9pnl43h:udkupbgk2v8cepa7h3i9d8394f@ds119578.mlab.com:19578/heroku_d9pnl43h';
mongoose.connect(databasepath);

var db = mongoose.connection;

module.exports = db;