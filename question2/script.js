function addFunction() {
   var num1 = parseFloat(document.getElementById("fnum").value);
   var num2 = parseFloat(document.getElementById("lnum").value);

   if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers");
      return;
   }

   var sum = num1 + num2;
   document.getElementById("result").innerText = sum;
}