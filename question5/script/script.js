function interestFunction() {
   var text="Compount Interest = ";
   var pAmount=parseFloat(document.getElementById("pAmount").value);
   var rateOfInterest=parseFloat(document.getElementById("rateOfInterest").value);
   var timePeriod=parseFloat(document.getElementById("timePeriod").value);
        if (isNaN(pAmount) || isNaN(rateOfInterest) || isNaN(timePeriod)) {
            alert("Please enter valid numbers");
            return;
        }
   var amount=pAmount*(Math.pow((1+rateOfInterest/100),timePeriod));
   var compountInterest=amount-pAmount;
   document.getElementById("displayText").textContent = text;
   document.getElementById("compoundInterestCalculator").innerText = compountInterest;
}


