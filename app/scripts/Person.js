
export default class Person {

    constructor(name, profileImage, mobileNumber, mi5) {
        this.name = name;
		this.mobileNumber = mobileNumber;
		this.profileImage = profileImage;
		this.mi5 = mi5;
    }

    call(mobilePhone, callee) {
		const callObj =  {
			"type": "call",
			"from": this.name,
			"to": callee.name,
			"phoneOwner": mobilePhone.owner.name,
			"phoneNumber": mobilePhone.number
		}
		this.mi5.trackCall(callObj);
    }

    text(mobilePhone, ...callees){
        const textArray = callees.map((callee, index) => {
            return  {
				"type": "text",
				"from": this.name,
				"to": callee.name,
				"phoneOwner": mobilePhone.owner.name,
				"phoneNumber": mobilePhone.number
			}
        });
		this.mi5.trackTexts(textArray);
	}

};
