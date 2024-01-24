function grossSalaryFunction() {

   var basicSalary = parseFloat(document.getElementById("basicSalary").value);
   if (basicSalary <= 0) {
      alert("please enter valid digits");
      return;
   }
   let grossSalary = 0;
   if (basicSalary <= 10000) {
      grossSalary = basicSalary + (8 / 100 * basicSalary) + (10 / 100 * basicSalary);
   } else if (basicSalary > 10000 && basicSalary <= 20000) {
      grossSalary = basicSalary + (16 / 100 * basicSalary) + (20 / 100 * basicSalary);
   } else {
      grossSalary = basicSalary + (24 / 100 * basicSalary) + (30 / 100 * basicSalary);
   }

   document.getElementById('displayResult').value = grossSalary;
}