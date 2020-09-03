let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {

    if (req.url === '/') {

        fs.readFile(__dirname + '/public/titles.json', function (err, data) {

            if (err) {
                console.error(err)
                handleError(res);
            } else {
                let title = JSON.parse(data.toString());

                fs.readFile(__dirname + '/public/template.html', function (err, data) {
                    if (err) {
                        handleError(res);
                    } else {
                        let tmpl = data.toString();
                        let html = tmpl.replace('%', title.join('</li><li>'));
                        res.writeHead(200, {'Content-Type':'text/html'})
                        res.end(html)
                    }
                })
            }

        });
    }

}).listen(8000);

function handleError(res) {
    res.writeHead(500, {'Content-Type': 'text/plain'})
    res.end('500 - Internal Error')
}