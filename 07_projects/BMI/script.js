
  const form = document.querySelector('.calculator');

 form.addEventListener('submit',(e)=>{
    
  

    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    const bmi = (weight / ((height * 0.3048) ** 2));
    
    const result = document.getElementById('result');


        //  result.innerHTML =bmi.toFixed(2);


    // const bmiText = document.createTextNode(` ${bmi.toFixed(2)}`);
    // result.appendChild(bmiText);
   
    const span = document.createElement('span');

    // span.appendChild(document.createTextNode( `${bmi.toFixed(2)}`));

    // result.appendChild(span);

    

})



