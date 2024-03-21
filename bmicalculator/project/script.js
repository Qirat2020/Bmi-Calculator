window.onload =() =>{
    const button = document.querySelector('#btn');
    button.addEventListener('click',calculatebmi);
    
}

function calculatebmi() {
    const height = document.querySelector('#height').value;
    const weight  = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNam(height) || height < 0 ){
        result.innerText ="please provide a valid height";
        return;
    } else if (!weight || isNam(weight) || weight < 0){
        result.innertext = "please provide a valid weight";
        return;
    } const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `under weight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi <24.9){
        result.innerText = `normal: ${bmi}`;
    }else if (bmi >= 25 && bmi <29.9){
        result.innerText = `over weight: ${bmi}`;
    }
    else if (bmi >= 30 && bmi <34.9){
        result.innerText = `obesity classI: ${bmi}`;
    }else if (bmi >= 35.5 && bmi <39.9){
        result.innerText = `obesity classII: ${bmi}`;
    }
    else {
        result.innerText = `extreme obesity: ${bmi}`;
    }



};