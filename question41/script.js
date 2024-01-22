
function electricityConsumedFunction() {
   
   var unit=parseFloat(document.getElementById("unit").value);
        if (unit<=0) {
            alert("please enter valid digits");
            return;
        }
let electricityCharge=0;
let cutOff;
if(unit>=1&&unit<=50){
cutOff=2.60;
electricityCharge+=cutOff;
}
else if(unit>50&&unit<=100){
cutOff=5.85;
electricityCharge+=cutOff;
}
else if(unit>100&&unit<=200){
cutOff=11.5;
electricityCharge+=cutOff;

}
else if(unit>200&&unit<700){
cutOff=18.75;
electricityCharge+=cutOff;
}
else{

electricityCharge=
}

document.getElementById('displayResult').value=grossSalary;
}


