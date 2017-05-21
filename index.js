'use strict';

var request = require("request"),
    cheerio = require("cheerio");

exports.get = (event, context, callback) => {

    console.log('Event: ' + JSON.stringify(event));
    console.log('Context: ' + JSON.stringify(context));

    context.callbackWaitsForEmptyEventLoop = false;

    var url = event.queryStringParameters.url;
    var selector = event.queryStringParameters.selector;

    console.log("URL: " + url);
    console.log("selector: " + selector);

    request(url, function (error, response, body) {

        //TODO: validation
        if (!error) {
            var $ = cheerio.load(body);
            var items = [];
            $(selector).each(function () {
                items.push($(this).text());
            });

            var response = {
                "isBase64Encoded": false,
                "statusCode": 200,
                "headers": {"Content-Type": "application/json; charset=utf-8"},
                "body": JSON.stringify(items)
            };
            console.log("Response: " + JSON.stringify(response));
            callback(null, response);
        } else {
            console.log("ERROR: " + error);
            callback({
                "statusCode": 500,
                "body": "Something went wrong:" + JSON.stringify(error)
            });
        }
    });

};

