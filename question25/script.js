function firstAndLastFunction() {

   var num = parseInt(document.getElementById("num").value);

   if (isNaN(num)) {
      alert("Please enter valid numbers");
      return;
   }
   let firstNumber, lastNumber;
   lastNumber = num % 10;

   document.getElementById("lastNumber").value = lastNumber;

   while (num != 0) {
      firstNumber = num % 10;
      num = parseInt(num / 10);
   }
   document.getElementById("firstNumber").value = firstNumber;


}