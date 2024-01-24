//Arrays

const myArr=[0,1,2,3,true,"Ayush"]; //Array in js can have value of any type but this is not good practice so always have value of any one data type.
// console.log(myArr[4]);//accessing value at index 0

const myArr2 =new Array(0,1,2,3,4);


// Array methods

// myArr.push(6);// add value in end of array
// myArr.pop(); // remove element form last index of array
// myArr.unshift(12);// add value at starting index of array
// myArr.shift();//remove elemnt from first index of array

// console.log(myArr.includes(9));// it checks whether element is present or not in array than returns boolean value accordingly

// console.log(myArr.indexOf(9));//returns the index of value if present if not present than returns -1

const newArr= myArr.join()// converts Arrays into String
console.log(myArr);
console.log(newArr);


// slice ,splice**
console.log("A",myArr);

const myn1=myArr.slice(0,3)// it will just print value from 0-2 range will be excluded in this and there will be no change in main array
console.log(myn1);
console.log("A",myArr);

const myn2=myArr.splice(0,3)// It will print array from 0-3 int this range will be included and also it will manipulate the main Array it will delete Array from 0-3 ;
console.log(myn2);
console.log("C",myArr);

//Note**
// The main difference b/w method slice and splice is that slice will not manipulate main Array but splice will manipulate the main Array it will delete the values from Array in it's range