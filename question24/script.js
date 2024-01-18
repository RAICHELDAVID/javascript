function factorialFunction() {
  var text='The factorial of  ' + document.getElementById('num').value +' is ';
var num=parseInt(document.getElementById('num').value);
if(num<0){
alert("Please enter valid numbers");
return;
}
if(num==1||num==0){
let x=1;
document.getElementById("displayResult").textContent = text;

document.getElementById("factorialCalculator").innerText=x;
return;
}
let factorial=1;
for(let i=2;i<=num;i++){
factorial*=i;

}
document.getElementById("displayResult").textContent = text;

document.getElementById("factorialCalculator").innerText=factorial;


}



