export default class Mi5 {

	constructor() {
		this.calls = [];
		this.texts = [];
	}

    // Returns a set of logs per person
    log(person) {

		const calls = this._matchPersonToCall(person);
		const texts = this._matchPersonToTexts(person);

		return [this._convertToLogString(calls), this._convertToLogString(texts)];
    }

	trackCall(callItem) {
		this.calls.push(callItem);
	}

	trackTexts(textMessage) {
		this.texts.push(textMessage);
	}

	_convertToLogString(itemsToConvert) {
		let stringArray = []
		itemsToConvert.forEach((item, index) => {
			if (item.type === 'call') {
				stringArray.push(`${this._removeLastNames(item.from)} called ${this._removeLastNames(item.to)} from ${this._removeLastNames(item.phoneOwner)}'s phone (${this._removeLastNames(item.phoneNumber)})`);
			} else {
				stringArray.push(`${this._removeLastNames(item.from)} texted ${this._removeLastNames(item.to)} from ${this._removeLastNames(item.phoneOwner)}'s phone (${this._removeLastNames(item.phoneNumber)})`);
			}

		});
		return stringArray;
	}

	_matchPersonToCall(person){
		const calls = this.calls;
		return calls.filter((call, index) => call.from === person.name);
	}

	_matchPersonToTexts(person){
		const texts = this.texts;
		const flattenedArray = [].concat.apply([],texts);
		return flattenedArray.filter((text, index) => text.from === person.name);
	}

	_removeLastNames(name) {
		return name.substr(0, name.indexOf(' '));
	}

};
