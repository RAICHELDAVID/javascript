function concateStringFunction() {

   const stringOne = document.getElementById("stringOne").value;
   const stringTwo = document.getElementById("stringTwo").value;

   const concatenatedString = stringOne.concat(stringTwo);

   document.getElementById('displayResult').value = concatenatedString;


}