function perfectFunction() {

   var num = parseFloat(document.getElementById("num").value);
   if (num <= 0) {
      alert("Please enter positive numbers");
      return;
   }
   let sum = 0;
   for (let i = 1; i < num; i++) {
      if (num % i == 0) {
         sum += i;
      }


   }
   if (sum == num) {
      document.getElementById('displayText').innerHTML = document.getElementById('num').value + " is a perfect number";
   } else {
      document.getElementById('displayText').innerHTML = document.getElementById('num').value + " is not a perfect number";
   }


}