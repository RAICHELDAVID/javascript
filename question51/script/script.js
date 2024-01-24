function palindromeFunction() {

   var num = parseFloat(document.getElementById("num").value);
   if (num < 0 || isNaN(num)) {
      alert("Please enter positive numbers");
      return;
   }
   let reverse = 0,
      remainder;
   let n = num;

   while (n != 0) {
      reverse = reverse * 10;
      remainder = n % 10;
      reverse = reverse + remainder;
      n = parseInt(n / 10);


   }
   if (num == reverse) {
      document.getElementById('displayText').innerText = "IT IS A PALINDROME";
   } else {
      document.getElementById('displayText').innerText = "IT IS NOT PALINDROME";

   }

}