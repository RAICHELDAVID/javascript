function areaAndVolumeOfACylinderFunction() {
   
   var radiusOfCylinder=parseFloat(document.getElementById("radiusOfCylinder").value);
   var heightOfCylinder=parseFloat(document.getElementById("heightOfCylinder").value);
        if (heightOfCylinder<=0&&radiusOfCylinder<=0) {
            alert("Please enter positive numbers");
            return;
        }
let area=(2*3.14*radiusOfCylinder*radiusOfCylinder)+(2*3.14*heightOfCylinder*radiusOfCylinder);
let volume=3.14*radiusOfCylinder*radiusOfCylinder*heightOfCylinder;

document.getElementById('displayResultForArea').value=area;


document.getElementById('displayResultForVolume').value=volume;



}


