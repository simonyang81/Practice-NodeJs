const cheerio = require('cheerio');
const server = require('./curl')

server.download('https://www.esquel.com/zh-hans/from-seed-to-shirt', function (data) {


    const $ = cheerio.load(data);

    $('img').each(function(i, e) {
        console.log($(e).attr("src"));
    });

    console.log("\n-->> Done");

});