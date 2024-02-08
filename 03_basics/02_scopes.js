
if(true){
    // let a =10;
    // const b=20;
    var c=30;

}
// var is global socpe it is accessible from anywhere
//both let and const are block scope 
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    username="Ayush"
    function two(){
        website="youtube"
        console.log(username);
    }
    // console.log(website); //we can't access this
    two()
}
// one()



// ******************intresting********************

console.log(addOne(6));// we can access function from here as well
function addOne(num){
    return ++num;
}
// console.log(addOne(6));//we can also access the function from here 


// console.log(addtwo(5))//we can't access the function from here it will give us error
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))//we can acces the function from here 