var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use(express.static('dist'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/dist',  express.static(__dirname + '/dist/index.html'));

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
