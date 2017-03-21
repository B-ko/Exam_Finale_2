var http = require("http");
var express = require('express');
var app = express();
var fs = require("fs");
var obj;


app.get('/', function (req, res) {
 		fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
		obj = JSON.parse(data)
		  res.writeHead(200, {"Content-Type": "text/html"});
		  res.write(data)
		  res.end();
		});
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
   console.log('Server running.');
})



