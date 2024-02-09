//Immediately Invoked Function Expressions(IIFE)

//named iife
(function chai(){
    console.log(`  connected`);
})();
//yha semicolumn lgana mandatory hai taki jo function immediately invoke hua hai wo end bhi kr jaye


//unamed iife
((name)=>{
    console.log(`DB connected to ${name}`);
})('Ayush');