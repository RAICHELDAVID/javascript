function prefixFunction() {

   var string = document.getElementById('string').value;
   var subString = document.getElementById('subString').value;
   if (string.indexOf(subString) == 0) {
      document.getElementById('displayResult').innerHTML = "substring is present";

   } else {
      document.getElementById('displayResult').innerHTML = "substring is not present";

   }

}