var assert = require('assert');
var example = require('../index.js');

describe('Example', function() {

  describe('hello()', function () {
    it('should return world when hello() is called', function () {
      assert.equal("world", example.hello());
    });
  });
  
});
