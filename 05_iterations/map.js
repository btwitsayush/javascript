const myNumbers=[1,2,3,4,5,6,7,8,9,10]

//map(it's also call back function and it  returns the value)

//using map without scope 
// const newNums=myNumbers.map((num)=> num+10)

//using map with scope 

/*const newNums=myNumbers.map((num)=> {
   return  num+10
})
*/

//chaining (using two or more methods together)

const newNums=myNumbers.map( (nums)=>{
   return nums*10
}).map((nums)=>{
    return nums+1
}).filter((nums)=>{
    return nums>50
})

console.log(newNums);

/*Note Difference b/w map and filters 

Use map() when you want to transform each element of an array like multiply ,divide or something like that 

Use filter() when you want to extract elements from an array based on a condition.

It returns a new array containing only the elements of the original array that satisfy the condition specified in the callback function.
*/