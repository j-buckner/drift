// index.js
var express = require('express')
var exphbs  = require('express-handlebars');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');

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

// Connection URL
var url = 'mongodb://localhost:27017/drift';

// Use connect method to connect to the server
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var continentSchema = mongoose.Schema({
    name: String
  });

  var Continent = mongoose.model('Continent', continentSchema);
  var europe = new Continent({ name: 'Europe' });

});

var port = Number(process.env.PORT || 5000);
app.listen(port)