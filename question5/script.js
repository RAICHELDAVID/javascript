function interestFunction() {
   var pAmount=parseFloat(document.getElementById("pAmount").value);
   var rateOfInterest=parseFloat(document.getElementById("rateOfInterest").value);
   var timePeriod=parseFloat(document.getElementById("timePeriod").value);
        if (isNaN(pAmount) || isNaN(rateOfInterest) || isNaN(timePeriod)) {
            alert("Please enter valid numbers");
            return;
        }

   var compountInterest=pAmount*(1+rateOfInterest/100)**timePeriod)-pAmount;
   document.getElementById("compoundInterestCalculator").innerText = compountInterest;
}


