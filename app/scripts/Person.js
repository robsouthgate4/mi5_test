export default class Person {

    constructor(name, profileImage, mobileNumber, personId) {
		this.personId = personId;
        this.name = name;
		this.firstName = this._getFirstName(this.name);
		this.mobileNumber = mobileNumber;
		this.profileImage = profileImage;

		this.calls = [];
		this.texts = [];
    }

    call(mobilePhone, callee) {
		const callObj =  {
			'type': 'call',
			'from': this.firstName,
			'to': this._getFirstName(callee.name),
			'phoneOwner': this._getFirstName(mobilePhone.owner.name),
			'phoneNumber': mobilePhone.number
		}
		this.calls.push(callObj);
    }

    text(mobilePhone, ...callees){
        callees.forEach((callee, index) => {
            let calleObj = {
				'type': 'text',
				'from': this.firstName,
				'to': this._getFirstName(callee.name),
				'phoneOwner': this._getFirstName(mobilePhone.owner.name),
				'phoneNumber': mobilePhone.number
			}
			this.texts.push(calleObj);
        });
	}

	_getFirstName(name) {
		let tempNAme = name;
		return tempNAme.substr(0, tempNAme.indexOf(' '));
	}

	getAllCalls() {
		return this.calls;
	}

	getAllTexts() {
		return this.texts;
	}

};
