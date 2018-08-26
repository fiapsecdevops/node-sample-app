var http = require('http'),
    assert = require('assert'),
    express = require('express'),
    app = express();
    
app.set('port', (process.env.PORT || 5000))

var baseurl = 'http://127.0.0.1:' + app.get('port') + '/';
console.log('Testing with URL', baseurl);

var request = require('request');
var assert = require('chai').assert;

describe('/', function () {
  it('should return 200', function (done) {
    request(baseurl, {json:true}, function(err, response, body) {
      assert.equal(200, response.statusCode);
      done();
    });
  });
});