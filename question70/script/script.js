function largestAndSmallestFunction() {

   var string = document.getElementById("string").value;
   const arrayOfWords = string.split(" ");
   let min = arrayOfWords[0];

   let max = arrayOfWords[0];

   for (var i = 1; i < arrayOfWords.length; i++) {
      if (arrayOfWords[i].length < min.length) {
         min = arrayOfWords[i];
      }
      if (arrayOfWords[i].length > max.length) {
         max = arrayOfWords[i];
      }
   }
   document.getElementById('largestWord').value = max;
   document.getElementById('smallestWord').value = min;
}