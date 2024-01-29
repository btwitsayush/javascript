//**singleton is implemented through constructor only

// object literals


//creating an object

const jsUser = {
    name:"Ayush",
    age:23,
    location:"Punjab",
    email:"ayush@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"],
    "fullName":"Ayush Srivastava"
}

//accessing objects

console.log(jsUser.name,jsUser.email); //1st way
console.log(jsUser["fullName"],jsUser["email"]);//2nd way

//2nd comes in role when while declaring object we declared any variable in "double quotation" we can access "double quotation" variable through 2nd way only and with the both way we can access mutiple values togeter