// index.js
var express = require('express')
var exphbs  = require('express-handlebars');
var favicon = require('serve-favicon');

var app = express();
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.engine('handlebars', 
    exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.render('app');
});

app.get('/travel-profile', function(req, res){
  res.render('app');
});

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/node_modules/materialize-css/dist'));

var port = Number(process.env.PORT || 5000);
app.listen(port)