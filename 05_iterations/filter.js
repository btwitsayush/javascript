const coding =["js","java","c++","c"]

//for each doesn't return any value
const values = coding.forEach((item)=>{
    // console.log(item);
})
// console.log(values);

//filter(it also use call back function like for each loop but it returns value)


const myNums=[1,2,3,4,5,6,7,8,9,10]
/*
//using filter without scope({})

const ans=myNums.filter((num)=> num > 4)
console.log(myNums);
console.log(ans);
*/

//using filters with scope({}) whenever we are using filter with scopes we need to return value if we didn't use return type we will get [](empty array)

/*
const ans1=myNums.filter((nums)=>{
    
return nums>4
})
console.log(ans1);
*/

/*

// returning values with for each loop

const newNums=[]

myNums.forEach((num)=>{
    if(num>4)
    newNums.push(num);
})
console.log(newNums);
*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },  
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//we use let when we have to change our value in future
let userBooks = books.filter( (bk)=>{

  return  bk.genre==='History'
  

})

 userBooks = books.filter( (bk)=>{

  const data = bk.publish>=1995 && bk.genre==='Science'
      return data 
    
    })


console.log(userBooks);