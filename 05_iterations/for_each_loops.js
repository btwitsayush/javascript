//for each loops

// in for each loop we neeed a callback function so that's why we don't write the function name we directly use it 

const coding =["js","java","c++","c"]

// coding.forEach( function ( key){
//     console.log(key);
// })

// coding.forEach( ( key) => {
//     console.log(key);
// })

// function print(item){
//     console.log(item);
// }

// coding.forEach(print)



// The arrow function can have parameters such as 'item', 'index', and 'array', which are automatically provided by the forEach method during iteration.



coding.forEach( (item,index,arr) =>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"javaScript",
        languageFilename:"js"

    },
    {
        languageName:"java",
        languageFilename:"java"

    },
    {
        languageName:"python",
        languageFilename:"py"

    }
]
myCoding.forEach( ( items)=>{
    console.log(items.languageFilename);
})
