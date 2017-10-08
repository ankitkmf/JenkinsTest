var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

//app.listen(4000);
var port = 4000;
app.listen(port, function() {
    console.log("Server started at port " + port);
});