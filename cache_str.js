let http = require('http')
let url = require('url')
let items = []

let server = http.createServer(function (req, res) {

    switch (req.method) {
        case 'POST':

            let item = '';
            req.setEncoding('utf-8');
            req.on('data', function (chunk) {
                item += chunk;
            });
            req.on('end', function () {
                items.push(item);
                console.log("items: ", items);
                res.end('OK');
            });

            break;

        case 'GET':
            items.forEach((value, index) =>
                res.write(index + ') ' + value + '\n')
            );
            res.end();
            break;

        default:
            break;
    }

});

server.listen(3000);