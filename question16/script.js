function isPrimeFunction() {

   var num = parseFloat(document.getElementById("num").value);
   if (isNaN(num)) {
      alert("Please enter valid numbers");
      return;
   }
   if (num <= 1) {
      document.getElementById("displayText").innerHTML = "THE GIVEN NUMBER IS NOT PRIME";
      return;
   }
   for (let i = 2; i < num; i++) {
      if (num % i == 0) {
         document.getElementById("displayText").innerHTML = "THE GIVEN NUMBER IS NOT PRIME";
         return;
      }
   }
   document.getElementById("displayText").innerHTML = "THE GIVEN NUMBER IS PRIME";


}