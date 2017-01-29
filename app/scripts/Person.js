export default class Person {

    constructor(name, profileImage, mobileNumber) {
        this.name = name;
        this.calls = [];
        this.texts = [];
		this.mobileNumber = mobileNumber;
		this.profileImage = profileImage;
    }
   
    call(mobilePhone, callee) {       
		const callObj = {
			"from": this.name,
			"to": callee.name,
			"phoneOwner": mobilePhone.owner.name,
			"phoneNumber": mobilePhone.number
		}
        this.calls.push(callObj);
    }

    text(mobilePhone, ...callees){
        const textObj = callees.map((callee, index) => {
            return  {
				"from": this.name,
				"to": callee.name,
				"phoneOwner": mobilePhone.owner.name,
				"phoneNumber": mobilePhone.number
			}
        });
        this.texts.push(textObj);
    }

};
