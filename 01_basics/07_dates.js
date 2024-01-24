//Dates

let myDate = new Date() //it's object
// console.log(myDate.toString());//Output=>Wed Jan 24 2024 08:46:28 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());//Output=>1/24/2024, 8:46:28 AM
// console.log(myDate.toDateString());//Output=>Wed Jan 24 2024

// let myCreatedDate= new Date(2024,0,24) // in js months start from 0
// let myCreatedDate= new Date(2024,0,24,14,20,50)
let myCreatedDate= new Date("2024-01-24")// When you give month in format of dd/mm/yyy format month starts from 01
// console.log(myCreatedDate.toLocaleString());;

let myTimeStamp =Date.now();
// console.log(myTimeStamp);// by default it will give time in milisec

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //converting the time into sec
let newDate=new Date()

newDate.toLocaleString('default',{
    weekday:"long",
    hour:"2-digit"
})
console.log(newDate);