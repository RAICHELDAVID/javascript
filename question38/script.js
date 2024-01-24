function sumAndAverageFunction() {

   var num = parseFloat(document.getElementById("num").value);
   if (num <= 0) {
      alert("Please enter positive numbers");
      return;
   }
   let sum = 0;
   for (let i = 1; i <= num; i++) {

      sum += i;


   }
   let average = sum / num;
   document.getElementById('displaySum').value = sum;
   document.getElementById('displayAverage').value = average;


}