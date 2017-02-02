export default class Mi5 {

    // Returns a set of logs per person
    log(person) {
		const calls = person.getAllCalls();
		const texts = person.getAllTexts();
		const callsAndTexts = this._flattenArray([calls, texts]);

		if (calls.length === 0 && texts.length === 0) {
			return '<p>No Entries</p>';
		} else {
			return this._convertToLogString(callsAndTexts);
		}
    }

	_convertToLogString(itemsToConvert) {
		let stringArray = [];
		itemsToConvert.forEach((item, index) => {
			if (item.type === 'call') {
				stringArray.push(`<p>// ${this._removeLastNames(item.from)} called ${this._removeLastNames(item.to)} from ${this._removeLastNames(item.phoneOwner)}'s phone (${item.phoneNumber})</p>`);
			} else {
				stringArray.push(`<p>// ${this._removeLastNames(item.from)} texted ${this._removeLastNames(item.to)} from ${this._removeLastNames(item.phoneOwner)}'s phone (${item.phoneNumber})</p>`);
			}

		});
		return stringArray;
	}

	_flattenArray(theArray) {
		let flattenedArray = [].concat.apply([],theArray);
		return flattenedArray;
	}

	_removeLastNames(name) {
		let tempNAme = name;
		return tempNAme.substr(0, tempNAme.indexOf(' '));
	}

};
