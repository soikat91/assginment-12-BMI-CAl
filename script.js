
const heightInput=document.getElementById('heightInput');
const weightInput=document.getElementById('weightInput');
const buttonInput=document.getElementById('calculateBtn');
const result=document.getElementById('result');

const bmi_cal=()=>{

    const weight=weightInput.value;
    const weightText=parseInt(weight);
    let weightStatus=false;

    const height=heightInput.value;
    const heightText=parseInt(height)/100;
    let heightStatus=false;

    
    // weight input text validation 
    
    if(weightText===' ' || isNaN(weightText) || weightText<0){
        document.getElementById('weightError').innerHTML='Please Enter Valid Weight'
        result.innerHTML=''
    }else{
        document.getElementById('weightError').innerHTML=' ';
        weightStatus=true;
    }

// height input text validation

    if(heightText===' '|| isNaN(heightText) || heightText<0){
        document.getElementById('heightError').innerHTML="Please Enter Valid Height";
        result.innerHTML=''

    }else{
        document.getElementById('heightError').innerHTML=' ';
        heightStatus=true;
    }
    
  


    if(heightStatus && weightStatus){
        const results = (weightText /(heightText*heightText)).toFixed(2);
        result.innerHTML="BMI Result: "+results;
        heightInput.value=''
        weightInput.value=''

    }
    
}


buttonInput.addEventListener('click',bmi_cal);

