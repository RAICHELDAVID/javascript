function sumOfDigitOfaNumberFunction() {

   var num = parseInt(document.getElementById("num").value);


   if (isNaN(num)) {
      alert("Please enter valid numbers");
      return;
   }
   let sum = 0;
   let n = num;
   let remainder;
   while (n != 0) {
      remainder = n % 10;

      sum = sum + remainder;
      n = parseInt(n / 10);
   }

   document.getElementById('resultValue').value = (sum);

}