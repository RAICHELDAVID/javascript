function countDigitsInANumberFunction() {
   
   var num=parseFloat(document.getElementById("num").value);
        if (num<0) {
            alert("Please enter positive numbers");
            return;
        }
let remainder,count=0;
let n=num;
if(num==0){
document.getElementById('displayResult').value=1;
return;

}

   while(n>0){
		remainder=n%10;
		n=parseInt(n/10);
		count++;

		
}


document.getElementById('displayResult').value=count;



}


