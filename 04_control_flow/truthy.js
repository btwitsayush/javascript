const userEmail = [];

if(userEmail){
    console.log("got user Email");
}
else{
    console.log("didn't got user email");
}

/* falsy values

false,0,-0,BigInt 0n,"",null,undefined,NaN;
*/
/*  truthy values 

  "0",'false'(b/c it's in string form)," ",[],{},function(){}(it's called empty function)

*/
//To check if an array is empty or not
if(userEmail.length===0){
    console.log("Array is empty");
}

const objects={}

//To check if an object is empty or not we will convert it into arrays
if(Object.keys(objects).length===0){
    console.log("Empty object");
}

// Nullish Coalescing Operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined. 
// If the left-hand side operand is any other falsy value (such as 0 or ''), it will not be considered nullish and the left-hand side operand will be returned.

let val1;

// Example:
// val1 = 5 ?? 10; // Output: 5

// In this case, since the left-hand side operand (5) is not null or undefined, it is returned.

// val1 = null ?? 10; // Output: 10
// When the left-hand side operand is null, the right-hand side operand (10) is returned.

// val1 = undefined ?? 15; // Output: 15

// Similarly, when the left-hand side operand is undefined, the right-hand side operand (15) is returned.

// val1 = null ?? 10 ?? 20; // Output: 10
console.log(val1);



// Terniary Operator

// condition ? true : false;

const price = 100;

price >= 80 ? console.log("price is high") : console.log("price is low");

 