function fibonacciFunction() {

   var num = parseFloat(document.getElementById("num").value);
   if (num < 1) {
      alert("Please enter positive numbers");
      return;
   }
   let f1 = 0,
      f2 = 1,
      next;
   document.write(f1 + " ");

   for (let i = 1; i < num; i++) {
      document.write(f2 + " ");
      next = f1 + f2;
      f1 = f2;
      f2 = next;
   }

}