function appendToDisplay(value) {
   document.getElementById('display').value += value;
}

function clearDisplay() {
   document.getElementById('display').value = '';
}

function operate(operator) {
   var display = document.getElementById('display');
   var currentValue = display.value;

   if (currentValue !== '' && !currentValue.includes(operator)) {
      display.value += operator;
   }
}

function calculateResult() {
   var display = document.getElementById('display');
   var expression = display.value;

   if (expression !== '') {
      try {
         var result = eval(expression);
         display.value = result;
      } catch (error) {
         display.value = 'Error';
      }
   }
}