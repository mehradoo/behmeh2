var request = require("request"),
    cheerio = require("cheerio");

exports.get = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    var url = event.url;
    var selector = event.selector;
    var result = {};

    console.log("URL: " + url);
    console.log("selector: " + selector);

    request(url, function (error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);
            if (selector) {
                var items = [];
                $(selector).each(function () {
                    items.push($(this).text());
                });
                result.result = items;

            } else {
                result.result = content;
            }

            console.log("Result: " + JSON.stringify(result));
            callback(null, result);
        } else {
            console.log("ERROR: " + error);
            callback(new Error('Something went wrong'));
        }
    });

};

