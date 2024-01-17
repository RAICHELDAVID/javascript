function cubeFunction() {
   var text='The cube of ' + document.getElementById('num').value +' is ';
   var num=parseFloat(document.getElementById("num").value);
  
        if (isNaN(num)) {
            alert("Please enter valid numbers");
            return;
        }

   var cubeResult=num*num*num;
   document.getElementById("displayText").textContent = text;
   document.getElementById("cubeCalculator").innerText = cubeResult;
}



