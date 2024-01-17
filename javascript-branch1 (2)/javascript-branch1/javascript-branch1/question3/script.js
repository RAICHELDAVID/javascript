function addFunction() {
   var num1=parseFloat(document.getElementById("num1").value);
   var num2=parseFloat(document.getElementById("num2").value);
   var num3=parseFloat(document.getElementById("num3").value);
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Please enter valid numbers");
            return;
        }
   var sum=num1+num2+num3;
   document.getElementById("sumresult").innerText = sum;
   var avg=(num1+num2+num3)/3;
   document.getElementById("avgresult").innerText = avg;
}


