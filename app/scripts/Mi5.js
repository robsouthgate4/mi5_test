export default class Mi5 {
    // Returns a set of logs per person
    log(person) {

		let logArray = [];

		const calls = person.calls;
		const texts = person.texts[0];

		// If person has made no calls or texts, log 'No entries'
		if ( calls && texts == undefined ) {
			return 'No Entries';
		} else {
			for ( let call of calls ) {
				logArray.push(`${this._removeLastNames(call.from)} called ${this._removeLastNames(call.to)} from ${this._removeLastNames(call.phoneOwner)}'s phone [${call.phoneNumber}]`);
			}
			for ( let text of texts ) {
				logArray.push(`${this._removeLastNames(text.from)} texted ${this._removeLastNames(text.to)} from ${this._removeLastNames(text.phoneOwner)}'s phone [${text.phoneNumber}]`);
			}
			return logArray;
		}

    }

	// return only the first name of name string
	_removeLastNames(name) {
		return name.substr(0, name.indexOf(' '));
	}	

};
