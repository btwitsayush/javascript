//**singleton is implemented through constructor only

// object literals


//creating an object

const mySym =Symbol("key1")

const jsUser = {
    name:"Ayush",
    age:23,
    [mySym]:"myKey1",//symbol ko access or create dono krne ke liye square bracket mai rkhna hota hai 
    location:"Punjab",
    email:"ayush@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"],
    "fullName":"Ayush Srivastava"
}

//accessing objects

// console.log(jsUser.name,jsUser.email); //1st way
//2nd comes in role when while declaring object we declared any variable in "double quotation" we can access "double quotation" variable through 2nd way only and with the both way we can access mutiple values togeter
// console.log(jsUser["fullName"],jsUser["email"]);//2nd way

// console.log(jsUser[mySym]);


//updating values in objects 
jsUser.email="ayushsrivastavta@gmail.com"
// console.log(jsUser.email);


// freezing objects (it doesn't allow us to change values )
// Object.freeze(jsUser)
// jsUser.email="ayushsrivastavta@microsoft.com"
// console.log(jsUser);

jsUser.greetingOne= function(){
    console.log("Hello js user");
   }

jsUser.greetingTwo= function(){
 console.log(`Hello js user ${this.fullName}`);
}
console.log(jsUser.greetingOne());
console.log(jsUser.greetingTwo());

