function evenNumFunction() {

   var num = parseFloat(document.getElementById("num").value);
   if (num <= 0) {
      alert("Please enter positive numbers");
      return;
   }
   let sum = 0;
   for (let i = 2; i <= num; i++) {
      if (i % 2 == 0) {
         sum += i;
      }


   }
   document.getElementById('displayResult').value = sum;

}