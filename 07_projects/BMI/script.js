
const form = document.getElementById('calculator');

 form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    const bmi = weight / ((height * 0.3048) ** 2);

    const result = document.getElementById('result');

    result.innerHTML = "Your BMI value is: " + bmi.toFixed(2);
})



