// *********Nums**********

const score =400
// console.log(score);

const balance=new Number (100); // create a object

// console.log(balance);
// console.log(balance.toString());// converting the Number into String
// console.log(balance.toFixed(2))// it will display 2 decimal value 

const otherNumber= 123.8966
// console.log(otherNumber.toPrecision(4));// It will format the number to 4 significant digit 

const bigNumber= 12345676543

// console.log(bigNumber.toLocaleString('en-In'));const 

// Using toLocaleString('en-In') to format the numeric value with Indian style grouping and number formatting.
// By default, it will use the US style, but by passing 'en-In' as the argument, we specify Indian style.


// *********Maths**********

// console.log(Math.abs(-4)); // Convert negative value into postive

// console.log(Math.round(4.4)); // It will round of the value if value is 4.4 it will give 4 if value is 4.5 it will give 5

// console.log(Math.ceil(4.1)); // It will give the max value if value is 4.1 the output will be 5

// console.log(Math.floor(4.9));//It will give the min value if value is 4.9 the output will be 4

// console.log(Math.min(4,3,1,2));
// console.log(Math.max(4,3,1,2));


// console.log(Math.floor(Math.random() * 10) + 1);//generates a random number 

//  To get value b/w Range

const min=12

const max=23

console.log(Math.floor(Math.random()*(max-min+1)+min));
