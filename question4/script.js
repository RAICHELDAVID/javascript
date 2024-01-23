function interestFunction() {
   var text = "Simple Interest = ";
   var pAmount = parseFloat(document.getElementById("pAmount").value);
   var rateOfInterest = parseFloat(document.getElementById("rateOfInterest").value);
   var timePeriod = parseFloat(document.getElementById("timePeriod").value);
   if (isNaN(pAmount) || isNaN(rateOfInterest) || isNaN(timePeriod)) {
      alert("Please enter valid numbers");
      return;
   }

   var simpleInterest = (pAmount * rateOfInterest * timePeriod) / 100;

   document.getElementById("displayText").textContent = text;

   document.getElementById("simpleInterestCalculator").innerText = simpleInterest;
}