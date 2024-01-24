function ASCIIFunction() {

   var string = document.getElementById('string').value;

   if(string[0]==" ") {
	string=string.trim();
	
   }
   
   for (let i = 0; i < string.length; i++) {
      if (string[i] == " ") {
         continue;
      } else {
         let result = string.codePointAt(i);

         document.write("ascii value of " + string[i] + " is ");
         document.write(result + "<br>");
      }

   }


}