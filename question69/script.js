function balancedBracketsFunction() {

   var string = document.getElementById("string").value;
   const stack = [];
   const bracketPairs = {
      '(': ')',
      '[': ']',
      '{': '}'
   };

   for (let char of string) {
      if (bracketPairs[char]) {
         stack.push(char);
      } else {
         if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
            document.getElementById("displayResult").innerHTML = " not valid brackets";
            return;

         }
      }
   }

   if (stack.length === 0) {
      document.getElementById("displayResult").innerHTML = "It is  valid brackets";

   }
}

	
 