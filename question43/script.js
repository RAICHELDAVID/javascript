function areaAndVolumeOfAConeFunction() {
   
   var radius=parseFloat(document.getElementById("radius").value);
   var height=parseFloat(document.getElementById("height").value);
   var slantHeight=parseFloat(document.getElementById("slantHeight").value);
        if (radius<=0&&height<=0&&slantHeight<=0) {
            alert("Please enter positive numbers");
            return;
        }
let area=(3.14*radius*slantHeight)+(3.14*radius*radius);
let volume=(1/3)*(3.14)*(radius*radius)*height;

document.getElementById('displayResultForArea').value=area;


document.getElementById('displayResultForVolume').value=volume;



}


