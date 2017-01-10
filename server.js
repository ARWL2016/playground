var express = require('express');

var port = 5000; 

var app = express(); 

app.get('/', function(request, response) {
    response.sendFile('public/index.html', {root: __dirname});
    console.log(request.query); 
});

app.get('/send', function(request, response) {
    console.log(`The first name is ${request.query.first}`); 
    console.log(`The last name is ${request.query.last}`); 
    response.end('thanks'); 
});

// app.post('/', function(request, response) {
//     console.log(request.params);
//     request.
// });

app.listen(port, function() {
    console.log("Listening on port " + port); 
}); 