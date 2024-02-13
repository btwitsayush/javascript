// for of loops(only runs on iterable things like array,strings maps...)

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]

for (const value of arr) {
    // console.log(value);
    
}

const greetings ="Hello world from Ayush!"

for(const greets of greetings){
    // console.log(`Each char is ${greets}`);
}

// Maps(Always store unique values)


const map=new Map();
map.set("IN","INDIA")
map.set("USA","UNITED STATE OF AMERICA")
map.set("Ayush",true);
console.log(map);

for(const [key,value] of map){
// console.log(`key--> ${key} value-->${value}`);
}


