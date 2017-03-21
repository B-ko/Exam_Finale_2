var http = require("http");
var express = require('express');
var app = express();
var fs = require("fs");
var obj;


fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
		obj = JSON.stringify(data)
});

app.get('/', function (req, res) {
		  res.writeHead(200, {"Content-Type": "application/json"});
		  res.write(obj);
		  res.end();
		})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
   console.log('Server running.');
})