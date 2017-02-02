import Mi5 from './Mi5.js';
import Person from './Person.js';

const mi5 = new Mi5();
const personArray = [];

// Person instances
const dan = new Person('Dan Winters', 'Dan_winters.png', '07874-438205', 0);
const anthony = new Person('Anthony Miles', 'Anthony_miles.png', '07723-337466', 1);
const alex = new Person('Alex Lambert', 'Alex_lambert.png', '07519-219885', 2);
const erin = new Person('Erin Davies', 'Erin_davis.png', '07375-229473', 3);

// Person array
personArray.push(dan, anthony, alex, erin);

const peopleContainer = document.querySelector('.people-of-interest-inner');

// Write each person to the Dom
personArray.forEach((person, index) => {
	peopleContainer.innerHTML += createPersonHtml(person);
});


// Phone objects
const phone1 = {owner: dan,	number:	'07874438205'};
const phone2 = {owner: alex, number: '07874438205'};
const phone3 = {owner: erin, number: '07874438205'};
const phone4 = {owner: anthony, number: '07874438205'};

// Person actions
dan.call(phone1, alex);
dan.call(phone2, alex);
dan.text(phone3, erin, anthony, alex);

alex.call(phone2, dan);
alex.call(phone3, erin);
alex.text(phone2, erin);

anthony.call(phone1, dan);
anthony.text(phone3, dan, alex);

erin.call(phone1, dan);
erin.text(phone3, dan, alex);

const personListItem = document.querySelectorAll('.person');

// Person box click
personListItem.forEach((personListItem, index) => {
	personListItem.addEventListener('click', function(event){
		handlePersonClick(this);
	});
});

// Close modal click

const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', function(e){
	toggleModal();
	e.preventDefault();
});

// Handle person click event
function handlePersonClick(personNode) {
	let personIdentifier = personNode.getAttribute('data-personid');

	personArray.forEach((person, index) => {
		if ( person.personId == personIdentifier ) {
			let logs = mi5.log(person);
			writeLogsToDom(person, logs);
		}
	});
	toggleModal();
}


function createPersonHtml(person) {
	return `<article class="person" data-personid="${person.personId}">
						<img src="../images/${person.profileImage}" alt=""/>
						<div>
							<p> ${person.name} </p>
							<span> ${person.mobileNumber} </span>
						</div>
			</article>`;
}


function writeLogsToDom(person, logs){
	const nameHtml = document.querySelector('.person-dialog p');
	const phoneNumberHtml = document.querySelector('.person-dialog span');
	const profileImageHtml = document.querySelector('.person-dialog img');
	const logsHtml = document.querySelector('.logs');

	nameHtml.innerHTML = person.name;
	phoneNumberHtml.innerHTML = person.mobileNumber;
	profileImageHtml.src = `../images/${person.profileImage}`;
	logsHtml.innerHTML = removeCommas(logs);
}

const modal = document.querySelector('#modal');

function removeCommas(item) {
	let tempItem = item;
	if(typeof(tempItem) === 'string') {
		return tempItem;
	} else {
		return tempItem.join("");
	}
}

function toggleModal() {
	modal.classList.toggle('open');
}
