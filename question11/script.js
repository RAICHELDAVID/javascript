function swapFunction() {
   
   var fNum=parseFloat(document.getElementById("fNum").value);
   var lNum=parseFloat(document.getElementById("lNum").value);
   
   
        if (isNaN(fNum)||isNaN(lNum)) {
            alert("Please enter valid numbers");
            return;
        }

   var sum=fNum+lNum;
   document.getElementById("result1").value=sum-fNum;
   document.getElementById("result2").value=sum-lNum;
   

}



