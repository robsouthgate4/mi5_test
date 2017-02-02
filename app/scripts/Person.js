export default class Person {

    constructor(name, profileImage, mobileNumber, personId) {
		this.personId = personId;
        this.name = name;
		this.mobileNumber = mobileNumber;
		this.profileImage = profileImage;

		this.calls = [];
		this.texts = [];
    }

    call(mobilePhone, callee) {
		const callObj =  {
			"type": "call",
			"from": this.name,
			"to": callee.name,
			"phoneOwner": mobilePhone.owner.name,
			"phoneNumber": mobilePhone.number
		}
		this.calls.push(callObj);
    }

    text(mobilePhone, ...callees){
        callees.forEach((callee, index) => {
            let calleObj = {
				"type": "text",
				"from": this.name,
				"to": callee.name,
				"phoneOwner": mobilePhone.owner.name,
				"phoneNumber": mobilePhone.number
			}
			this.texts.push(calleObj);
        });
	}

	getAllCalls() {
		return this.calls;
	}

	getAllTexts() {
		return this.texts;
	}

};
