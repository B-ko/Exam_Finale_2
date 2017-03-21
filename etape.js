const fs = require("fs");
const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;
const app = express();
app.set('view engine', 'ejs'); // générateur de template 
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))  // pour utiliser le dossier public
app.use(bodyParser.json())  // pour traiter les données JSON

var obj;

app.get('/', function (req, res) {

	fs.readFile('public/text/collection_provinces.json', 'utf8', function (err, data) {
		if (err) throw err;
    		obj = JSON.parse(data);
    		res.writeHead(200, {"Content-Type": "application/json"});
			res.write(obj);
			res.end();
  	});

  res.render('etape.js');

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})



