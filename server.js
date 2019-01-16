var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var port = 3000;

//the server to respond to requests via code below:
var server = http.createServer(function(req, res) {
	var filePath = '.'+ req.url;
	if (filePath == './') {
		filePath = './main.html';
	}	
	var contentType = 'text/html';
	fs.readFile(filePath, function(err, data) {
		if (!err && data) {
			res.writeHead(200, {'Content-Type': contentType});
			res.end(data, 'utf-8');			
		} else {
			res.writeHead(500);
			res.end();
		}
	});

});

//start the server have have it listen to port 3000
server.listen(port, function(err) {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log('Server is listening on port', port);
});