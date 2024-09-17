function addFunction() {
   var text='The result is ';
   var fnum=parseFloat(document.getElementById("fnum").value);
   var lnum=parseFloat(document.getElementById("lnum").value);
        if (isNaN(fnum)||isNaN(lnum)) {
            alert("Please enter valid numbers");
            return;
        }

   var sumResult=fnum+lnum;
   document.getElementById("displayText").textContent = text;
   document.getElementById("sumResult").innerText = sumResult;
}
function subFunction() {
   var text='The result is ';
   var fnum=parseFloat(document.getElementById("fnum").value);
   var lnum=parseFloat(document.getElementById("lnum").value);
        if (isNaN(fnum)||isNaN(lnum)) {
            alert("Please enter valid numbers");
            return;
        }

   var subResult=fnum-lnum;
   document.getElementById("displayText").textContent = text;
   document.getElementById("subResult").innerText = subResult;
}



