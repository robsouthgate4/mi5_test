export default class Mi5 {


    // Returns a set of logs per person
    log(person) {

		const calls = person.getAllCalls();
		const texts = this._flattenArray(person.getAllTexts());
		const callsAndTexts = this._flattenArray([calls, texts]);

		if (calls.length === 0 && texts.length === 0) {
			return 'No Entries';
		} else {
			return this._convertToLogString(callsAndTexts);
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

	_flattenArray(theArray) {

		const flattenedArray = [].concat.apply([],theArray);
		return flattenedArray;

	}

	_removeLastNames(name) {

		return name.substr(0, name.indexOf(' '));

	}

};
