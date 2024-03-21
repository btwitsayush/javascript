const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

let count =10;

// created an array to add previous inputs
const array =[];

const form = document.querySelector('#form');

 form.addEventListener('submit',(e)=>{

    e.preventDefault();
    
    // getting value from user 

    const guess = parseInt(document.getElementById('number').value);
    const attempt = document.getElementById('count');

// adding previous guesses to array
    array.push(guess);

    const previousValue =document.getElementById('previous');
    
    // displaying previous value
    previousValue.innerHTML=array;

    // displaying whether input is correct or not 

    const result = document.getElementById('result'); 


    if(guess===randomNumber){
     result.innerHTML="correct guess";
     
    }
    else{
        result.innerHTML=" not correct guess";
       count = count-1;
        attempt.innerText=count;
    }

})
