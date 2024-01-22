function productOfDigitsOfANumberFunction() {
var text="The product of digit of number is ";
   var num=parseInt(document.getElementById("num").value);

        if (isNaN(num)) {
            alert("Please enter valid numbers");
            return;
        }
	let result=1;
	
        while(num!=0){
	let remainder=num%10;
	num=parseInt(num/10);
	result*=remainder;
	}
document.getElementById("displayText").textContent=text;
	document.getElementById("productOfDigitsOfANumberCalculator").innerText=result;

	

}



