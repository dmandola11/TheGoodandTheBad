var http = require('http');

var PORT = 7000;
var PORT2= 7050;

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

function handleRequest(request, response) {
	response.end('You\u0027re Good Enough, You\u0027re Smart Enough and, doggonit, People Like You!');
};

server.listen(PORT, function(){

	console.log("This server is listening on: http://localhost:%s", PORT);

});

function handleRequest2(request, response) {
	response.end('You\u0027re TERRIBLE!!!');
};

server2.listen(PORT2, function(){

	console.log("This server is listening on: http://localhost:%s", PORT2);

});

