var http = require("http");
var fs = require('fs');
var port = 3000;
var serverUrl = "127.0.0.1";
var counter = 0;

var server = http.createServer(function(req, res) {
	if(req.url == "/") {
		fs.readFile("index.html", function(err, text){
			res.setHeader("Content-Type", "text/html");
			res.end(text);
		});
	}
	else if(req.url == "/javascript") {
		fs.readFile("javascript/todo.html", function(err, text){
			if (err)
				console.log(err.message);
			res.setHeader("Content-Type", "text/html");
			res.end(text);
		});
	}
	return;
});

console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);
