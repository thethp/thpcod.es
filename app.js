var express = require('express');
var app = express();
var jade = require('jade');

app.use(express.static(__dirname+'/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home');
    next();
});

app.listen(80);
console.log('Server running on port 80');
