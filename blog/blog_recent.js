let http = require('http')
let fs = require('fs')

http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.readFile('./title.json', function (err, data) {

            if (err) {
                console.error(err);
                res.end('Server Error');
            } else {
                let titles = JSON.parse(data.toString());
                fs.readFile('./template.html', function (err, data) {

                    if (err) {
                        console.log(err)
                        res.end('Server Error');
                    } else {
                        let tmpl = data.toString();
                        let html = tmpl.replace('%', titles.join('</li><li>'));
                        res.writeHead(200, {'Context-Type': 'text/html'});
                        res.end(html);
                    }

                });
            }
        });
    }

}).listen(8000, '127.0.0.1');