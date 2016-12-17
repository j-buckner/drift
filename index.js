// index.js
var express = require('express')
var exphbs  = require('express-handlebars');
var favicon = require('serve-favicon');
var MongoClient = require('mongodb').MongoClient;

var app = express();
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/node_modules/materialize-css/dist'));

// Connection URL
var url = 'mongodb://localhost:27017/drift';

var db;
MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});

app.get(['/', '/travel-profile'], function(req, res){
  db.collection('continents').find().toArray(((err, continents) => {
    if (err) return console.log(err)

    var continents = continents;
    db.collection('countries').find().toArray(((err, countries) => {
      var countries = countries;
      var travelData = {
        continents: continents,
        countries: countries
      }
      console.log(JSON.stringify(travelData));
      if (err) return console.log(err)
      res.render('app', {data: JSON.stringify(travelData)})
    }));
  }));
});

var port = Number(process.env.PORT || 5000);
app.listen(port)