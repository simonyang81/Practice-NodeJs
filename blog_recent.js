let http = require('http');
let fs = require('fs');
const express = require('express');
const app = express()
const port = 3000


http.createServer(function (req, res) {

    if (req.url === '/') {

        fs.readFile(__dirname + '/public/titles.json', function (err, data) {

            if (err) {
                handleError(err, res);
            } else {
                let title = JSON.parse(data.toString());

                fs.readFile(__dirname + '/public/template.html', function (err, data) {
                    if (err) {
                        handleError(err, res);
                    } else {
                        let tmpl = data.toString();
                        console.info(title.join('</li><li>'));
                        let html = tmpl.replace('%', title.join('</li><li>'));
                        res.writeHead(200, {'Content-Type':'text/html'});
                        res.end(html);
                    }
                })
            }

        });
    }

}).listen(8000);

function handleError(err, res) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('500 - Internal Error');
}

var s = "test";
s.len = 4;
var t = s.len;
console.log(t); // undefined



// name = "The Window";
// var obj = {
//     name : "My Object",
//     getNameFunc: function () {
//         // let name = "func";
//         var that = this;
//         return function () {
//             return that.name;
//         }
//     }
// }
//
// console.log(obj.getNameFunc()());

// function f1() {
//     var n = 999;
//     var m = 1000
//     nAdd = function () {
//         n += 1;
//     }
//     function f2() {
//         console.log(n);
//         console.log(m);
//     }
//     return f2;
// }
//
// var result = f1();
// result();

// function t() {
//
//     var b = 3;
//
//     // 函数表达式
//     (function foo() {
//         var a = 3;
//         console.log(a);
//     })();
//
//     function foo() {
//         {
//             var a = 3;
//         }
//         console.log(a);
//     }
//
//
//     console.log(a);
// }


console.log('Server started on localhost:8000; Press Ctrl-C to terminate...');