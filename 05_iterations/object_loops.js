//for-in loops

const user ={
    name:"Ayush",
    id:"Ayush123"
}

//iterating over objects we need to  use for in loop 

for (const detail in user) {
    // if (user.hasOwnProperty(detail)) {
        // console.log(`${detail}: ${user[detail]}`);
    // }
}

const programming=["js","cpp","java","c++"]

for (const key in programming) {
        // console.log(`keys of arrays are ${key}:values of key is ${ programming[key]}`);
}





