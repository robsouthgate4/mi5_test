import Mi5 from './Mi5.js';
import Person from './Person.js';

const mi5 = new Mi5();

// Person instances
const dan = new Person('Dan Winters', 'Dan_winters.png', '07874-438205', mi5);
const anthony = new Person('Anthony Miles', 'Anthony_miles.png', '07723-337466', mi5);
const alex = new Person('Alex Lambert', 'Alex_lambert.png', '07519-219885', mi5);
const erin = new Person('Erin Davies', 'Erin_davis.png', '07375-229473', mi5);

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

console.log(mi5.log(anthony));


