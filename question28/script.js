function naturalNumReversePrintingFunction() {

   var num = parseFloat(document.getElementById("num").value);
   if (num <= 0) {
      alert("Please enter positive numbers");
      return;
   }
   for (let i = num; i >= 1; i--) {

      document.write(i);
      document.write("<br>");


   }

}