function arithmeticFunction(){
var num1=parseFloat(document.getElementById('num1').value);
var num2=parseFloat(document.getElementById('num2').value);
var num3=parseInt(document.getElementById('num3').value);
     if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid numbers");
            return;
        }
if(num3==1){
const sum=num1+num2;
document.getElementById('resultValue').value=sum;

}
if(num3==2){
const diff=num1-num2;
document.getElementById('resultValue').value=diff;
}
if(num3==3){
const mul=num1*num2;
document.getElementById('resultValue').value=mul;
}
if(num3==4){
const div=num1/num2;
document.getElementById('resultValue').value=div;
}
if(num3==5){
alert("sorry...The program gets terminated");
return;
}
}