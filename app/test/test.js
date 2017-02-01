var chai = require('chai');
chai.should();

import Mi5 from '../scripts/Mi5.js';
import Person from '../scripts/Mi5.js';

describe('Mi5', function() {
	describe('_removeLastNames', function() {

		let mi5;

		beforeEach(() => {
			mi5 = new Mi5();
		});

		it('returns the first name', () => {
			mi5._removeLastNames('Dan Winters').should.equal('Dan');
			mi5._removeLastNames('Dan Winters').should.be.a('string');
		});

	});

	describe('_convert toLogString()', function() {

		let mi5;

		beforeEach(() => {
			mi5 = new Mi5();
		});
	});
});


