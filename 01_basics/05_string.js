
const name ="Ayush"
const age = 22
// console.log(name+ age);
// console.log(`Hello my name is ${name.toUpperCase()} and my age is${age} `);
const newName= new String('Ayush Srivastava');// Creating a String object through the Object constructor. It will provide various methods to use on that object.
// console.log(typeof(newName));
// console.log(newName.length);
// console.log(newName.__proto__);



const newString = newName.substring(0, 4)
// console.log(newString);

const anotherString = newName.slice(-16 ,4)
// console.log(anotherString);

const newStringOne = "   ayush    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ayush.com/ayush%20srivastava"

// console.log(url.replace('%20', '_'))

// console.log(url.includes('srivastava'))

// console.log(newName.split('a'));
// console.log(newName.split('a',2));