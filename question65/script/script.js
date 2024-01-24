function caseReverseFunction() {

   var string = document.getElementById("string").value;
   var newString="";

   var reversedText = string.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
   document.getElementById('displayResult').value = reversedText;


      
   
}