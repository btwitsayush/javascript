const accountId=1234
let accountEmail="ayush12@gmail.com" // We use let because it works well with scoping.
var accountPassword="Ayu@12" //If we use var to declare variables, there will be no block scope, and a variable can be updated from anywhere. 
accountCity="Jaipur" // This is also a way to initialize variables in JavaScript.
let accountState;  //Intializing a variable without any data. By default it's value will be undefined,

//updating values

//accountId=4321  //We can't do this otherwise we will get error because const can't be updated.



accountEmail="ay@21gmail.com"
accountPassword="As@123"
accountCity="Bengaluru"


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //to print everything in form of a table