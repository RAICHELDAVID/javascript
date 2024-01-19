function divisibleFunction() {
   
   var num=parseFloat(document.getElementById("num").value);
        if (num<=0) {
            alert("Please enter positive numbers");
            return;
        }
   for(let i=1;i<=num;i++){
		if(i%5==0&&i%11==0){
		document.write(i);
		document.write("<br>");
}

		
}
document.getElementById('displayText').innerHTML="NO SUCH NUMBERS IN THIS RANGE";

}


