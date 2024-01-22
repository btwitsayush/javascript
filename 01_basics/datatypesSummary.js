/* Primitive Data Types

 Total 7 types
 String,Number,Boolean,Null,Undefined,Symbol,BigInt

  const name="Ayush"
  const age= 22
  const isLoggedIn=false
  const address=null 
  let emailId;

  // Symbol is used to make any value unique
  const id=Symbol('123')
  const anotherId=Symbol('123')
  console.log(id==anotherId); //output => false
  console.log(id===anotherId); //output => false
  
  const bigNumber= 234567890987654323456789123456789n
  */

/*
Non-Primitive(Reference)

Typeof all non-primitive data types are objects

Array,Objects,Function

const superHeroes=["shaktiman","naahraj","doga"] // Arrays


let myObj={
  name:"Ayush",
  age:21
} //object

const myFunc=function(){
 console.log("Hello ")
}
myFunc();//Function

*/


// JavaScript is a dynamically typed language i.e const score =100 ||const score =false  isme variable ka type run time mai decide hota hai issilye js dynamically typed  hai


//Quick recap


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */

      //  ***********************************************

      // Stack(Primitive), Heap (Non-Primitive)


    let name="Ayush"  
    let anotherName= name
    anotherName= "Ayush Srivastava"

    // console.log(anotherName);
    // console.log(name);

    let userOne ={
      email: "srivastavaayush123@gmail.com",
      upi:"srivastavaayush123@bl"
    }
    let userTwo=userOne;

    //  userTwo.email="srivastava123@gmail.com"
    //  console.log(userOne.email); //output=>srivastava123@gmail.com
    //  console.log( userTwo.email);//output=>srivastava123@gmail.com

    
// Both variables ended up with the same value because both of them are non-primitive types. In non-primitive types, the data reference is shared, so if the value of one variable is updated, it affects both variables since they share the same data reference.
