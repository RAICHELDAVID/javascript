function factorFunction() {
   var num = parseInt(document.getElementById('num').value);
   let half = parseInt(num / 2);
   if (num == 0 || num < 0) {
      alert("Please enter positive numbers");
      return;
   }
   if (num == 1) {
      document.write("factors of " + num + " is 1");
      return;
   }
   document.write("factors of " + num + " are 1");
   for (let i = 2; i <= num; i++) {
      if (num % i == 0) {
         document.write(",");
         document.write(i);


      }
   }

}