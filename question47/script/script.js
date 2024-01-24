function areaAndVolumeOfASphereFunction() {

   var radius = parseFloat(document.getElementById("radius").value);
   if (radius <= 0) {
      alert("Please enter positive numbers");
      return;
   }
   let area = 4 * 3.14 * radius * radius;
   let volume = 1.33 * 3.14 * radius * radius * radius;

   document.getElementById('displayResultForArea').value = area;


   document.getElementById('displayResultForVolume').value = volume;


}