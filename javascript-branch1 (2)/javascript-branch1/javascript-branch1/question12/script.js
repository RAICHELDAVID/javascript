function powerFunction() {
   
   var baseValue=parseFloat(document.getElementById("baseValue").value);
   var exponentValue=parseFloat(document.getElementById("exponentValue").value);
  
        if (isNaN(baseValue)||isNaN(exponentValue)) {
            alert("Please enter valid numbers");
            return;
        }
	var result = Math.pow(baseValue, exponentValue);
document.getElementById('resultValue').value = result;



}



