var chai = require('chai');
chai.should();

const expect = chai.expect;

import Mi5 from '../scripts/Mi5.js';
import Person from '../scripts/Person.js';

describe('Person', function() {

	describe('constructor', function() {

		let person;

		beforeEach(() => {
			person = new Person('Erin Davies', 'Erin_davis.png', '07375-229473', 3);
		});

		it('should create a new instance of person', () => {
			expect(person).to.be.an.instanceof(Person);
		});

		it('should set name if provided', () => {
			expect(person.name).to.equal("Erin Davies");
		});

		it('should set first name', () => {
			expect(person.firstName).to.equal("Erin");
		});

		it('should set id if provided', () => {
			expect(person.personId).to.equal(3);
			expect(person.personId).to.be.a('number');
		});

		it('should set mobile number if provided', () => {
			expect(person.mobileNumber).to.equal('07375-229473');
		});

		it('should set profile image if provided', () => {
			expect(person.profileImage).to.equal('Erin_davis.png');
		});

	});

	describe('_getFirstName', function() {

		let person;
		let dummyPerson = 'Erin';

		beforeEach(() => {
			person = new Person('Erin Davies', 'Erin_davis.png', '07375-229473', 3);
		});

		it('should return just the first name', () => {
			let name = 'Erin Davies';
			expect(person._getFirstName(name)).to.equal('Erin');
		});

	});

	describe('call', function() {

		let person;
		let person2;
		let phoneObj;
		let callsArray = [];

		beforeEach(() => {
			person = new Person('Erin Davies', 'Erin_davis.png', '07375-229473', 3);
			person2 = new Person('Rob Southgate', 'Erin_davis.png', '07375-229473', 3);
			phoneObj = {owner: person, number:'07874438205'};
			callsArray = person.calls;
		});

		it('calls array should be empty', () => {
			expect(callsArray).to.have.length(0);
		});

		it('calls array should recieve a new object', () => {
			person.call(phoneObj, person2);
			expect(callsArray).to.have.length(1);
		});

		it('calls array should recieve two new objects', () => {
			person.call(phoneObj, person2);
			person.call(phoneObj, person2);
			expect(callsArray).to.have.length(2);
		});

		it('new object should be in correct format', () => {
			let testObj = {
				"type": "call",
				"from": "Erin",
				"to": "Rob",
				"phoneOwner": "Erin",
				"phoneNumber": "07874438205"
			}
			person.call(phoneObj, person2);
			expect(callsArray[0]).to.eql(testObj);
		});

	});

	describe('text', function() {

		let person;
		let person2;
		let phoneObj;
		let textsArray = [];

		beforeEach(() => {
			person = new Person('Erin Davies', 'Erin_davis.png', '07375-229473', 3);
			person2 = new Person('Rob Southgate', 'Erin_davis.png', '07375-229473', 3);
			phoneObj = {owner: person, number:'07874438205'};
			textsArray = person.texts;
		});

		it('texts array should be empty', () => {
			expect(textsArray).to.have.length(0);
		});

		it('texts array should get a new object', () => {
			person.text(phoneObj, person2);
			expect(textsArray).to.have.length(1);
		});

		it('texts array should get two new objects', () => {
			person.text(phoneObj, person2);
			person.text(phoneObj, person2);
			expect(textsArray).to.have.length(2);
		});

		it('new object should be in correct format', () => {
			let testObj = {
				"type": "text",
				"from": "Erin",
				"to": "Rob",
				"phoneOwner": "Erin",
				"phoneNumber": "07874438205"
			}
			person.text(phoneObj, person2);
			expect(textsArray[0]).to.eql(testObj);
		});

	});

});

describe('Mi5', function() {

	describe('_flattenArray', function() {

		let mi5;
		let flattened = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		beforeEach(() => {
			mi5 = new Mi5();
		});

		it('Should leave 1 dimension array the same', () => {
			let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			expect(mi5._flattenArray(source)).to.be.eql(flattened);
		});

		it('Should flatten 2 dimensional array', () => {
			let source = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
			expect(mi5._flattenArray(source)).to.be.eql(flattened);
		});

	});

	describe('_convertToLogString', function() {

		let mi5;

		let logArrayStringCall = ['<p>// Rob Southgate called Dan from Erin\'s phone (078234678723)</p>'];
		let logArrayStringText = ['<p>// Rob Southgate texted Dan from Erin\'s phone (078234678723)</p>'];

		beforeEach(() => {
			mi5 = new Mi5();
		});

		it('Should return a new array of strings that fits the call format', () => {
			let source = [{
				from: "Rob Southgate",
				phoneNumber: "078234678723",
				phoneOwner: "Erin",
				to: "Dan",
				type: "call"
			}];
			expect(mi5._convertToLogString(source)).to.be.eql(logArrayStringCall);
		});

		it('Should return a new array of strings that fits the texts format', () => {
			let source = [{
				from: "Rob Southgate",
				phoneNumber: "078234678723",
				phoneOwner: "Erin",
				to: "Dan",
				type: "text"
			}];
			expect(mi5._convertToLogString(source)).to.be.eql(logArrayStringText);
		});

	});

});


