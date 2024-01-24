function replaceFunction() {

   var string = document.getElementById("string").value;
   var oldString = document.getElementById("oldString").value;
   var newString = document.getElementById("newString").value;
   let string1;
   const myArray = string.split(" ");
   for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] == oldString) {
         string1 = string.replace(oldString, newString)
      }
   }


   document.getElementById('displayResult').innerHTML = string1;
}