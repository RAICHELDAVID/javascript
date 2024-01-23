function charOccurenceFunction() {

   var string = document.getElementById('string').value;
   var stringChar = document.getElementById('stringChar').value;

   let count = 0;
   for (let i = 0; i < string.length; i++) {
      if (string[i] == stringChar) {
         count++;
      }
   }
   if (count == 0) {
      alert('no such char found in the string');
      return;

   }
   document.getElementById('displayResult').value = count;
}