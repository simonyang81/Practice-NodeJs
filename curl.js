let http = require('https')

function download(url, callback) {

    http.get(url, function (res) {

        let data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });

        res.on("end", function() {
            callback(data);
        });

    }).on("error", function() {
        callback(null);
    });

}

exports.download = download