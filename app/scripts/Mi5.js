export default class Mi5 {
	
	constructor() {
		this.calls = [];
		this.texts = [];
	}

    // Returns a set of logs per person
    log(person) {

		const calls = this._matchPersonToCall(person);
		const texts = this._matchPersonToTexts(person);

		return [calls, texts];

    }

	trackCall(callItem) {
		this.calls.push(callItem);
	}

	trackTexts(textMessage) {
		this.texts.push(textMessage);
	}

	_convertToLogString() {
		
	}

	_matchPersonToCall(person){
		return this.calls.filter((call, index) => call.from === person.name);
	}
	
	_matchPersonToTexts(person){
		console.log(person.name);
		console.log(this.texts);
		return this.texts[0].filter((text, index) => text.from === person.name);
	}

	_removeLastNames(name) {
		return name.substr(0, name.indexOf(' '));
	}	

};
