//creating functions
function sayMyName(){
    console.log("hi");
}
// sayMyName()


//creating functon with parameters
// function addition(num1,num2){
//     console.log(num1+num2);
// }
// addition(3,4)// calling function with arguments


//creating function that returns value

function adddition(num1,num2){
    //  let result=num1+num2;
    //  return result;

    return num1+num2;
}
// we are returning a value in our function so we are able to store the output outside
const ans=adddition(3,5);
// console.log(ans);

function loginUserMessage(username){
        //   if(username===undefined){
        //     console.log("You didn't enter any name");
        //     return;
        //   }

//we can also write the above codintion in form of  this 

//! this sign checks if username is euqual to  empty, undefined, null, etc

          if(!username){
            console.log("You didn't enter any name");
            return;
          }

       return `${username} just Logged in`
}
// console.log(loginUserMessage("Ayush"));
// console.log(loginUserMessage("")); // if we don't pass any value it returns undefined

//passing a default value in functions

function loginUserDefault(username="user"){
    return `${username} just Logged in`
}
// console.log(loginUserDefault());// if dont pass any value it will  take our by default valye "user"

// we can also over write the value
// console.log(loginUserDefault("Ayush"));