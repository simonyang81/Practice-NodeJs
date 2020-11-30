const connect = require('connect')

function logger1(req, res, next) {
    console.log('1, %s %s', req.method, req.url);
    next();
}

function logger2(req, res, next) {
    console.log('2, %s %s', req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World...')
}

let app = connect();
app.use(logger2);
app.use(logger1);
app.use(hello);
app.listen(3000);