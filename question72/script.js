function missingLetterFunction() {
   var string = document.getElementById('string').value;
   var length = string.length;
   var temp = string.charAt(0);
   var temp1 = string.at(-1);
   var alpha = "abcdefghijklmnopqrstuvwxyz";
   if (alpha.match(string)) {
      document.getElementById('displayText').innerHTML = "There is no missing letter";
   } else {
      var text = alpha.split("");
      var pos = text.indexOf(temp);
      var m = text.indexOf(temp1);
      var t = -1;
      for (var i = pos; i < m; i++) {
         if (!string.includes(text[i])) {
            document.write(text[i] + "\t");
         }
      }
   }
}