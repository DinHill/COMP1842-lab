const http = require('http'); // 1 - Import Node.js core module
const server = http.createServer(function (req, res) { // 2 - create server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
});
server.listen(8080); // 3 - listen for any incoming requests
console.log('Node.js web server at port 8080 is running...server1');
