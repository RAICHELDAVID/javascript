function caseReverseFunction() {

   var string = document.getElementById("string").value;

   if (string == string.toUpperCase()) {

      document.getElementById('displayResult').value = string.toLowerCase();
   } else {

      document.getElementById('displayResult').value = string.toUpperCase();
   }
}