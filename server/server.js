var app = require('./config/routes.js');

var port = process.env.PORT || 1337;

app.listen(port, function() {
  console.log('Server now listening on port: ' + port);
});

