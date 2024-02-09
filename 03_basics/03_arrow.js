const user ={
      username:"Ayush",
      price:199,

      welcomeMessage : function(){

            console.log(`${this.username} welcome to our website`);
            console.log(this);
      }
}
// console.log(this);
//this refers to current context
// user.welcomeMessage();
user.username="Ayush Srivastava";
// user.welcomeMessage();

//we can't use this in function
function chai(){
   let username="Ayush1211"
    console.log(this.username);
}
// chai()

/*Arrow functions
 ()=> {}
*/

const addTwo=(num1,num2) =>{
        return num1+num2;
}
// console.log(addTwo(3,4));

//we can also do this if we have one line code

// when we use curly brackets at that time only we use return keyword
const addNumber=(num1,num2)=> (num1+num2);
console.log(addNumber(3,4));