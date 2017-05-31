var https = require('https'),
	url = require('url'),
	fs = require('fs');

var options = {
	key:  fs.readFileSync('./privatekey.pem'),  
	cert:fs.readFileSync('./certificate.pem')
};

https.createServer(options, function(req, res) {
	var data = '',
		reqUrl = decodeURIComponent(req.url);
		parse = url.parse(reqUrl, true),
		query = parse.query,
		path = parse.pathname;
	req.on('data', function(chunk) {
		data += chunk; 
	});
	console.log(query);
	res.writeHead(200);
	res.end('hello world\n');
}).listen(8080);