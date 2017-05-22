'use strict';

var fs = require('fs');
var sinon = require('sinon');
var proxyquire = require('proxyquire').noCallThru();

describe("CSS Selector Handler", function () {

    var sandbox;
    var subject;
    var mockRequest;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();

        // mockRequest = (uri, callback) => {
        //     let responseBody = fs.readFileSync("./css-selector.happy.html", 'utf8');
        //     callback(undefined, undefined, responseBody);
        // };
        //
        // subject = proxyquire('../index', {
        //     'request': mockRequest
        // });

        subject = require('../index');

    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should not be null', function () {
        expect(subject).not.toBe(null);
    });

    it('should work!', function (done) {
        let event = {
            "queryStringParameters": {
                "url": "http://www.balatarin.com",
                "selector": ".link-url"
            }
        };

        let callback = sinon.spy((err, result) => {
            expect(err).toBeNull();
            expect(result).not.toBeUndefined();
            expect(result.body).not.toBeUndefined();
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body).length).toBeGreaterThan(0);
            done();
        });

        subject.byCssSelector(event, {}, callback);
    });
});
