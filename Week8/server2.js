const http = require('http'); // Import Node.js core module
const server = http.createServer(function (req, res) { // create web server
    if (req.url == '/') { // check the URL of the current request
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content
        res.write('<html><body><p>This is home Page. 001306203</p></body></html>');
        res.end();
    } else if (req.url == '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page. 001306203</p></body></html>');
        res.end();
    } else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page. 001306203</p></body></html>');
        res.end();
    } else if (req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World JSON. 001306203" }));
        res.end();
    } else {
        res.end('Invalid Request! 001306203');
    }
});
server.listen(8080); // 6 - listen for any incoming requests
console.log('Node.js web server at port 8080 is running...server2...001306203');
