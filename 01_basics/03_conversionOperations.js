
// *************Conversion************



//converting a string value to number

/*let score=undefined
console.log(typeof score);

let numScore=Number (score)
console.log(typeof numScore);
console.log( numScore);*/


//output for different conditions
//"33"=>33
// "33abc"=>NaN(not a number). {If the string is not valid for conversion in Number i will give NaN as a ouput but it's type will remain number}
//null=>0
//undefined=>NaN

//converting values in boolean

/*

let isLoggedIn = -1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
 console.log(booleanIsLoggedIn);
 */


 //output for different conditions

 //  1=>"true" 0=>"false"
 // null,undefined=>"false"
 // for any String value and number other than 0 it will return "true" even for negative numbers.

//converting values in String

 let someNumber = undefined

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
 
//output for different conditions

//it will convert every value in string whether it's null,undefined,number,boolean.




