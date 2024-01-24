function largestAndSmallestFunction() {

   var fNum = parseInt(document.getElementById("fNum").value);
   var sNum = parseInt(document.getElementById("sNum").value);
   var tNum = parseInt(document.getElementById("tNum").value);

   if (isNaN(fNum) || isNaN(sNum) || isNaN(tNum)) {
      alert("Please enter valid numbers");
      return;
   }
   let largest = Math.max(fNum, sNum, tNum);

   document.getElementById("largestNumber").value = largest;
   let smallest = Math.min(fNum, sNum, tNum);

   document.getElementById("smallestNumber").value = smallest;


}