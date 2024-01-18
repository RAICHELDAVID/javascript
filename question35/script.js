function positiveOrNegativeFunction() {

   var num=parseInt(document.getElementById("num").value);

        if (isNaN(num)) {
            alert("Please enter valid numbers");
            return;
        }

if(num>=0){
document.getElementById("displayResult").innerHTML="It is a positive number";
return;
}
else{
document.getElementById("displayResult").innerHTML="It is a negative number";
return;
}

	

}



