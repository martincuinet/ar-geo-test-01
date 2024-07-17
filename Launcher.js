


var http = require('http');
var fs = require('fs');
path = require("path");
http.createServer(function (req, res) {

	var filePath = '.' + req.url;
	if (filePath == './')
      filePath = './index.html';
      var extname = path.extname(filePath);
      var contentType = 'text/html';
      switch (extname) {
          case '.js':
              contentType = 'text/javascript';
              break;
          case '.css':
              contentType = 'text/css';
              break;
          case '.json':
              contentType = 'application/json';
              break;
          case '.png':
              contentType = 'image/png';
              break;
          case '.jpg':
              contentType = 'image/jpg';
              break;
          case '.wav':
              contentType = 'audio/wav';
              break;
      }


  	fs.readFile(filePath, function(error, content) {
    if (error) {
      if(error.code == 'ENOENT'){
          res.writeHead(500);
          res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
          res.end();
      }
      else {
          res.writeHead(500);
          res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
          res.end();
      }
  }
  else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
  }
  
  });
  	
}).listen(8080);