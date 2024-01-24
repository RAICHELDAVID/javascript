function charOccurenceFunction() {

   var string = document.getElementById('string').value;
   let countAlphabet = 0;
   let countNumber = 0;
   let countSpecial = 0;

   for (let i = 0; i < string.length; i++) {
      if (string[i] >= 48 || string[i] <= 57) {
         countNumber++;
      } else if (string[i] == '!' || string[i] == '@' || string[i] == '#' || string[i] == '$' || string[i] == '%' || string[i] == '^' || string[i] == '&' || string[i] == '*' || string[i] == '(' || string[i] == ')' || string[i] == '_' || string[i] == '+' || string[i] == '-' || string[i] == '=' || string[i] == '/') {
         countSpecial++;
      } else {
         countAlphabet++;
      }
   }

   document.getElementById('displayResult2').value = countNumber;
   document.getElementById('displayResult3').value = countSpecial;
   document.getElementById('displayResult1').value = countAlphabet;
}



