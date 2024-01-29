//Object singleton we create this using (constructor)


// const tinderUser =new Object();

const tinderUser ={}

tinderUser.id =123
tinderUser.name="Ayush"
tinderUser.isLoggedIn=false
// console.log(tinderUser);


// We can create as many nested object we want

const regularUser ={
    email:"ayush@gmail.com",
    fullName:{
       userfullName:{
           firstName:"Ayush",
           lastName:"Srivastava"
       }
    }
}
// console.log(regularUser.fullName.userfullName.firstName);

const obj1 ={
    1:"ayush",
    2:"srivastava"
}

const obj2={
    3:"ayush@gmail.com"
}

// const obj3 = Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

//Arrays of object

const user =[
    {
        id:123,
        name:"ayush"
    },
    {
        email:"a@gmail.com",
    }
]

// console.log(user[0]);

// console.log(user[0].id);

console.log(tinderUser);

//Object.keys helps us to fetch data in form of Arrays which will be usefull for us to iterate over it
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//return boolean value basically it checks whether the property exist or not in the object