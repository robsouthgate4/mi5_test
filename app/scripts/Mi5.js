export default class Mi5 {

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

	_convertToLogString(callsAndTexts) {
		let stringArray = [];
		callsAndTexts.forEach((item, index) => {
			if (item.type === 'call') {
				stringArray.push(`<p>// ${item.from} called ${item.to} from ${item.phoneOwner}'s phone (${item.phoneNumber})</p>`);
			} else {
				stringArray.push(`<p>// ${item.from} texted ${item.to} from ${item.phoneOwner}'s phone (${item.phoneNumber})</p>`);
			}

		});
		return stringArray;
	}

	_flattenArray(theArray) {
		let flattenedArray = [].concat.apply([],theArray);
		return flattenedArray;
	}

};
