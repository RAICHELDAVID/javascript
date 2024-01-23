function addFunction() {
  
   var fNum=parseFloat(document.getElementById("fNum").value);
   var lNum=parseFloat(document.getElementById("lNum").value);
        if (isNaN(fNum)||isNaN(lNum)) {
            alert("Please enter valid numbers");
            return;
        }

  var sum=fNum + lNum;
   document.getElementById("result").value = sum;
}
function subFunction() {
   
   var fNum=parseFloat(document.getElementById("fNum").value);
   var lNum=parseFloat(document.getElementById("lNum").value);
        if (isNaN(fNum)||isNaN(lNum)) {
            alert("Please enter valid numbers");
            return;
        }

   var subResult=fNum-lNum;
   
   document.getElementById("result").value = subResult;
}
function mulFunction() {
  
   var fNum=parseFloat(document.getElementById("fNum").value);
   var lNum=parseFloat(document.getElementById("lNum").value);
        if (isNaN(fNum)||isNaN(lNum)) {
            alert("Please enter valid numbers");
            return;
        }

   var mulResult=fNum*lNum;
   
   document.getElementById("result").value = mulResult;
}

function divFunction() {
  
   var fNum=parseFloat(document.getElementById("fNum").value);
   var lNum=parseFloat(document.getElementById("lNum").value);
        if (isNaN(fNum)||isNaN(lNum)) {
            alert("Please enter valid numbers");
            return;
        }

   var divResult=fNum/lNum;
   
   document.getElementById("result").value = divResult;
}


