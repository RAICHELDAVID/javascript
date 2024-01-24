function vowelConsonentFunction() {

   var string = document.getElementById('string').value;
   let countVowel = 0;
   let countConsonent = 0;


   for (let i = 0; i < string.length; i++) {
      if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u' || string[i] == 'A' || string[i] == 'E' || string[i] == 'I' || string[i] == 'O' || string[i] == 'U') {
         countVowel++;
      } else {
         countConsonent++;
      }
   }

   document.getElementById('displayResult2').value = countConsonent;

   document.getElementById('displayResult1').value = countVowel;
}