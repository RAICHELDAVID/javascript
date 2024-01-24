function electricityConsumedFunction() {

   var unit = parseFloat(document.getElementById("unit").value);
   if (unit <= 0) {
      alert("please enter valid digits");
      return;
   }
   let sum;

   if (unit >= 1 && unit <= 50) {


      sum = unit * 2.60;
      document.getElementById('displayResult').value = sum;
      return;
   }

   
   let sum1;
   let rem = unit - 50;
   if (unit >= 51 && unit <= 100) {

      sum1 = 50 * 2.60 + rem * 3.25;
      document.getElementById('displayResult').value = sum1;
      return;
   }

   
   let sum2;
   let rem1 = unit - 100;
   if (unit >= 101 && unit <= 200) {
      sum2 = 50 * 2.60 + 50 * 3.25 + rem1 * 5.65;
      document.getElementById('displayResult').value = sum2;
      return;
   }
   
   let sum3;
   let rem2 = unit - 200;
   if (unit >= 201 && unit <= 700) {
      sum3 = 50 * 2.60 + 50 * 3.25 + 100 * 5.65 + rem2 * 7.25;
      document.getElementById('displayResult').value = sum3;
      return;
   }
   
   let sum4, sum5, sum6;
   let rem3 = unit - 700;
   if (unit > 700) {
      sum4 = 50 * 2.60 + 50 * 3.25 + 100 * 5.65 + 500 * 7.25 + rem3 * 7.25;
      sum5 = (rem3 * 7.25) * (0.5 / 100);
      sum6 = sum4 + sum5;
      document.getElementById('displayResult').value = sum6;
      return;

   }
   
}