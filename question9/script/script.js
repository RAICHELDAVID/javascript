function evenOrOddFunction() {

   var num = parseFloat(document.getElementById("num").value);

   if (isNaN(num)) {
      alert("Please enter valid numbers");
      return;
   }
   if (num % 2 == 0) {
      document.getElementById("evenOrOddCalculator").innerHTML = "The given number is EVEN";
   } else {
      document.getElementById("evenOrOddCalculator").innerHTML = "The given number is ODD";

   }


}


