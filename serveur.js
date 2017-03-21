var http = require("http");
var express = require('express');
var app = express();
var fs = require("fs");
var obj;



app.set('view engine', 'ejs');



app.get('/', function(req, res) {

    res.render('index');

});

app.get('/fichier', function (req, res) {
 	fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
			obj = JSON.parse(data)
		  	res.end(data);
		});
})

app.get('/tableau', function (req, res) {
 	fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
			obj = JSON.parse(data)
		  	res.end(data);
		});
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
   console.log('Server running.');
})



