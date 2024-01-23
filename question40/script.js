function sumAndAverageFunction() {
   
   var num=parseFloat(document.getElementById("num").value);
        if (num<=0) {
            alert("Please enter positive numbers");
            return;
        }
let evenSum=0,oddSum=0;
   for(let i=1;i<=num;i++){
		if(i%2==0){
            evenSum+=i;
}
		else{
		oddSum+=i;
}		
}
document.getElementById('displayEvenSum').value=evenSum;
document.getElementById('displayOddSum').value=oddSum;


}


