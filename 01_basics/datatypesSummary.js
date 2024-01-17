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

Array,Objects,Function
*/

// JavaScript is a dynamically typed language i.e const score =100 ||const score =false  isme variable ka type run time mai decide hota hai issilye js dynamically typed  hai