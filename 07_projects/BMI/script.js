
  const form = document.querySelector('.calculator');

 form.addEventListener('submit',(e)=>{
    
    console.log("hi");

    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    
    const bmi = weight / ((height * 0.3048) ** 2);
    
    const result = document.getElementById('result');


    // const bmiText = document.createTextNode(` ${bmi.toFixed(2)}`);


    // result.appendChild(bmiText);

    const span = document.createElement('span');

    span.appendChild(document.createTextNode( `${bmi.toFixed(2)}`));

    result.appendChild(span);
})



