let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {

    console.log("req.method: ", req.method);

    let body = "Hello World";
    // res.setHeader('Context-Length', body.length + 1);
    res.setHeader('Context-Type', 'text/plain');
    res.statusCode = 200;
    res.end(body);
});

server.listen(3001)

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }

    fs.readFile(__dirname + path, function (error, data) {

        if (error) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, contentType);
            res.end(data);
        }
    })

}

http.createServer(function (req, res) {

    let path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            // res.writeHead(200, {'Content-Type':'text/plain'});
            // res.end('Homepage');
            serveStaticFile(res, '/public/home.html', 'text/html')
            break;
        case '/about':
            res.writeHead(200, {'Content-Type':'text/plain'});
            res.end('About');
            break;
        case '/img/logo.png':
            serveStaticFile(res, '/public/img/logo.png', 'image/png')
            break;
        default:
            res.writeHead(404, {'Context-Type':'text/plain'});
            res.end('Not found');
            break;
    }

}).listen(3000);

console.log('Server started on localhost:3000; Press Ctrl-C to terminate...');