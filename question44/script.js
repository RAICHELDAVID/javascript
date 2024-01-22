function areaAndVolumeOfACubeFunction() {
   
   var lengthOfCube=parseFloat(document.getElementById("lengthOfCube").value);
        if (lengthOfCube<=0) {
            alert("Please enter positive numbers");
            return;
        }
let area=6*lengthOfCube*lengthOfCube;
let volume=lengthOfCube*lengthOfCube*lengthOfCube;

document.getElementById('displayResultForArea').value=area;


document.getElementById('displayResultForVolume').value=volume;



}


