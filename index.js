// index.js
var express = require('express')
var exphbs  = require('express-handlebars');

var app = express()
app.engine('handlebars', 
	exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('home');
});

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/node_modules/materialize-css/dist'));
app.use(
     sass.middleware({
         src: __dirname + '/sass', //where the sass files are 
         dest: __dirname + '/public', //where css should go
         debug: true // obvious
     })
 );

var port = Number(process.env.PORT || 5000);
app.listen(port)