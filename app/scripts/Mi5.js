export default class Mi5 {


    // Returns a set of logs per person
    log(person) {

		const calls = person.getAllCalls();
		const texts = this._flattenArray(person, person.getAllTexts());

		if (calls.length === 0 && texts.length === 0) {
			return 'No Entries';
		} else {
			return [this._convertToLogString(calls), this._convertToLogString(texts)];
		}

    }

	_convertToLogString(itemsToConvert) {
		let stringArray = [];
		itemsToConvert.forEach((item, index) => {
			if (item.type === 'call') {
				stringArray.push(`${this._removeLastNames(item.from)} called ${this._removeLastNames(item.to)} from ${this._removeLastNames(item.phoneOwner)}'s phone (${item.phoneNumber})`);
			} else {
				stringArray.push(`${this._removeLastNames(item.from)} texted ${this._removeLastNames(item.to)} from ${this._removeLastNames(item.phoneOwner)}'s phone (${item.phoneNumber})`);
			}

		});
		return stringArray;
	}

	_flattenArray(person, theArray) {
		const flattenedArray = [].concat.apply([],theArray);
		return flattenedArray.filter((text, index) => text.from === person.name);
	}

	_removeLastNames(name) {
		return name.substr(0, name.indexOf(' '));
	}

};
