var path = require('path');
var express = require('express');
var app = express();

// Log the requests
app.use(express.logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 

// Route for everything else.
app.get('*', function(req, res){
  
});

// Fire it up!
app.listen(3000);
