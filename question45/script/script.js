function areaAndVolumeOfACuboidFunction() {

   var lengthOfCuboid = parseFloat(document.getElementById("lengthOfCuboid").value);
   var widthOfCuboid = parseFloat(document.getElementById("widthOfCuboid").value);
   var heightOfCuboid = parseFloat(document.getElementById("heightOfCuboid").value);
   if (heightOfCuboid <= 0 && widthOfCuboid <= 0 && lengthOfCuboid <= 0) {
      alert("Please enter positive numbers");
      return;
   }
   let area = (2 * lengthOfCuboid * widthOfCuboid) + (2 * widthOfCuboid * heightOfCuboid) + (2 * lengthOfCuboid * heightOfCuboid);
   let volume = lengthOfCuboid * widthOfCuboid * heightOfCuboid;

   document.getElementById('displayResultForArea').value = area;


   document.getElementById('displayResultForVolume').value = volume;


}