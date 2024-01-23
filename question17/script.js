var totalOfMathsPhysicsChemistry,totalOfMathsPhysics;
function sumFunction() {
   var mathsMark=parseFloat(document.getElementById("mathsMark").value);
   var physicsMark=parseFloat(document.getElementById("physicsMark").value);
   var chemistryMark=parseFloat(document.getElementById("chemistryMark").value);
        if (isNaN(mathsMark) || isNaN(physicsMark) || isNaN(chemistryMark)) {
            alert("Please enter valid numbers");
            return;
        }

  totalOfMathsPhysicsChemistry=mathsMark+physicsMark+chemistryMark;
  totalOfMathsPhysics=mathsMark+physicsMark;

   document.getElementById("totalOfMathsPhysicsChemistry").value = totalOfMathsPhysicsChemistry;
document.getElementById("totalOfMathsPhysics").value = totalOfMathsPhysics;
}
function eligibilityFunction() {
     if (isNaN(totalOfMathsPhysicsChemistry) || isNaN(totalOfMathsPhysics)) {
            alert("Please enter valid numbers");
            return;
        }
	if(totalOfMathsPhysicsChemistry>=190||totalOfMathsPhysics>=140){
		document.getElementById("isEligible").innerHTML="Eligible";
	}
	else{
		document.getElementById("isEligible").innerHTML="Not Eligible";
	}

}
