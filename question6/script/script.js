function areaFunction() {
   var text='area of a circle with radius ' + document.getElementById('radiusOfCircle').value +' is';
   var radiusOfCircle=parseFloat(document.getElementById("radiusOfCircle").value);
        if (isNaN(radiusOfCircle)) {
            alert("Please enter valid numbers");
            return;
        }
   let pi = 3.141;
   var area=(pi*radiusOfCircle*radiusOfCircle);
   document.getElementById("displayText").textContent = text;
   document.getElementById("areaCalculator").innerText = area;
}


