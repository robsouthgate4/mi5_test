var chai = require('chai');
chai.should();

const expect = chai.expect;


import Mi5 from '../scripts/Mi5.js';
import Person from '../scripts/Mi5.js';

describe('Mi5', function() {
	let mi5 = new Mi5();
	beforeEach(() => {
			mi5 = new Mi5();
	});

	describe('constructor', function() {

		it('should have empty calls array', () => {
			expect(mi5.calls).to.be.a('array');
		});

		it('should have empty texts array', () => {
			expect(mi5.texts).to.be.a('array');
		});

	});

	describe('_removeLastNames', function() {

		let mi5;
		let name = 'Firstname Lastname';

		beforeEach(() => {
			mi5 = new Mi5();
		});

		it('should return just the first name', () => {
			expect(mi5._removeLastNames(name)).to.equal('Lastname');
		});

	});
});


