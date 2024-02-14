//reduce 

const myNums=[1,2,3,4,5]
/*
const total=myNums.reduce((accumulator, currentValue)=>{
   return accumulator+currentValue
},0)
console.log(total);
*/

/* how does reduce works 

we need three values initial value accumulator, currentValue

->At first the initial value will be transferd to accumulator 

->Currentvalue mee=ans the current Index of arary

->After the first operation whatever value we will get that value will be passed to accumulator

How to pass Inital Vlaue?

we can use a seperate variable for that or we can pass it after the score using (,)ie ,0;

*/

const initialValue=0

const total= myNums.reduce((accumulator,currentValue)=>
{
    return accumulator+currentValue

},initialValue)

// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((accumulator,item)=>{
return accumulator+item.price;
},0)
console.log(priceToPay);