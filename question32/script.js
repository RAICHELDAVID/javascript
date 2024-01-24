function stringPalindromeFunction() {

   var string = document.getElementById("string").value;
   let i = 0;
   let j = string.length - 1;
   for (let i = 0; i < string.length - 1; i++) {
      if (string[i] != string[j]) {
         document.getElementById('displayText').innerHTML = "It is not palindrome";
         return;
      }
      j--;
   }
   document.getElementById('displayText').innerHTML = "It is palindrome";


}