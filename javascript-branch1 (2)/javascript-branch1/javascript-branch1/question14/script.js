function reverseOfaNumberFunction() {
   
   var num=parseInt(document.getElementById("num").value);

  
        if (isNaN(num)) {
            alert("Please enter valid numbers");
            return;
        }
	let rev=0;
	let remainder;
	let n=num;
	while(n!=0){
	remainder=n%10;
	 rev=rev*10+remainder;
	n=parseInt(n/10);
	}

   document.getElementById('resultValue').value=rev;

}



