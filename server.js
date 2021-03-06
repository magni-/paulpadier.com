var path = require('path');
var express = require('express');
var morgan = require('morgan')
var app = express();

// Log the requests
app.use(morgan('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for everything else.
app.get('*', function(req, res){

});

// Fire it up!
var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log("listening on port " + port);
});
