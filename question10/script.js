function leapYearFunction() {

   var year = parseFloat(document.getElementById("year").value);

   if (isNaN(year)) {
      alert("Please enter valid numbers");
      return;
   }
   if (year % 4 == 0) {
      document.getElementById("leapYearCalculator").innerHTML = " It is a LEAP YEAR";
   } else {
      document.getElementById("leapYearCalculator").innerHTML = "It is NOT LEAP YEAR";

   }


}