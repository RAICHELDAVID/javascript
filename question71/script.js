function changeFunction() {

   var string = document.getElementById('string').value;
   var text2 = "";
   var len = new Array();

   for (var i = 0; i < string.length; i++) {
      if (122 == string.charCodeAt(i)) {
         text2 = "a";
      } else if (90 == string.charCodeAt(i)) {
         text2 = "A";
      } else if ((65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 89) || (97 <= string.charCodeAt(i) && string.charCodeAt(i) <= 121)) {
         text2 = text2 + String.fromCharCode(string.charCodeAt(i) + 1);
      } else {
         text2 = text2 + string.charAt(i);
      }
   }
   document.getElementById("displayResult").innerHTML = "New String is " + text2;
}