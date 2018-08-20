var assert = require('assert'),
    http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:5000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Hello world"', function (done) {
    http.get('http://localhost:5000', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('Hello world', data);
        done();
      });
    });
  });
});