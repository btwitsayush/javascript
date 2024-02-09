// if-else

/*comaprision operator
<,>,<=,>=,==(check values are equal or not),!=,===(check value and data type as well) */


// if("2"==="3"){
// console.log(`executed`);//it will not execute b/c data type is same but vale us not same
// }

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

//we can't access power out-side the block element 

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}