function oddNumFunction() {

   var num = parseFloat(document.getElementById("num").value);
   if (num <= 0) {
      alert("Please enter positive numbers");
      return;
   }
   for (let i = 1; i <= num; i++) {
      if (i % 2 != 0) {
         document.write(i);
         document.write("<br>");
      }


   }

}