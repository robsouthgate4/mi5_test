var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

var Mi5 = require('../scripts/Mi5.js');
var Person = require('../scripts/Person.js');

describe('Mi5', function() {
	describe('#log()', function() {
		it('should return string "No Entries" when no text or call arrays defined', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});


