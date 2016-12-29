var express = require('express');

var port = 5000; 

var app = express(); 

app.get('/', function(request, response) {
    response.sendFile('public/index.html', {root: __dirname});
});

app.listen(port, function() {
    console.log("Listening on port " + port); 
}); 