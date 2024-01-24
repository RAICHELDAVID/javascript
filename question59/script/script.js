function characterPrintingFunction() {

   const stringOne = document.getElementById("stringOne").value;
   document.write("characters are:");

   for (let i = 0; i < stringOne.length; i++) {
      document.write("<br>");

      document.write(stringOne[i]);


   }


}