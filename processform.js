var express = require('express');

var app = express(); 

app.get('/processform.js', function(request, response) {
    console.log(request);
});