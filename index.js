var phantom = require("phantom");
var cheerio = require("cheerio");

exports.get = (event, context, callback) => {

    var _phantom, _page;
    var url = event.url;
    var selector = event.selector;

    phantom.create().then(ph => {
        _phantom = ph;
        return _phantom.createPage();
    }).then(page => {
        _page = page;
        return _page.open(url);
    }).then(status => {
        console.log(status);
        return _page.property('content');
    }).then(content => {
        var $ = cheerio.load(content);
        var result = {};

        if (selector) {
            var items = [];
            $(selector).each(function (i, elem) {
                items.push($(this).text());
            });
            result.result = items;

        } else {
            result.result = content;
        }

        _page.close();
        _phantom.exit();

        callback(null, result);
    }).catch(e => {
        console.log(e);
        callback(new Error('Something went wrong'));
    });

};

