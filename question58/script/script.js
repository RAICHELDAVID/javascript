function middleCharStringFunction() {

   const stringOne = document.getElementById("stringOne").value;
   if (stringOne.length % 2 == 0) {
      alert("No middle character in this string");
      return;
   }
   let characterAtMiddle = stringOne.charAt((stringOne.length - 1) / 2);

   document.getElementById('displayResult').value = characterAtMiddle;


}