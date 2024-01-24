function removeConsonantsFunction() {

   var string = document.getElementById("string").value;
   var vowelString = "";
   for (let i = 0; i < string.length; i++) {
      if ((string[i] == 'A') || (string[i] == 'E') || (string[i] == 'I') || (string[i] == 'O') || (string[i] == 'U') || (string[i] == 'a') || (string[i] == 'e') || (string[i] == 'i') || (string[i] == 'o') || (string[i] == 'u')) {
         vowelString += string[i];

      }
   }
   document.getElementById('displayResult').value = vowelString;


}