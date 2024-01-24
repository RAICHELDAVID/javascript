function lastCharStringFunction() {

   const stringOne = document.getElementById("stringOne").value;
   let characterAtLast = stringOne.charAt(stringOne.length - 1);

   document.getElementById('displayResult').value = characterAtLast;


}