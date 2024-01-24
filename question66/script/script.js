function reverseVowelsFunction() {

   var string = document.getElementById('string').value;
   var result = '';
   var str = string.split('')
   var end = string.length - 1;
   for (var i = 0; i < str.length; i++) {
      if (i > end) {
         break;
      }

      while (end >= 0) {
         if ('aAeEiIoOuU'.indexOf(str[end]) !== -1) {
            break;
         }

         end--;
      }

      if ('aAeEiIoOuU'.indexOf(str[i]) === -1) {} else {
         var temp = str[end];
         str[end] = str[i];
         str[i] = temp;

         end--;
      }
   }

   result = str.join('');

   document.getElementById('displayResult').value = result;
}





