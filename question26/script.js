function multiplicationFunction() {
   
   var num=parseInt(document.getElementById("num").value);


        if (isNaN(num)) {
            alert("Please enter integer numbers");
            return;
        }
document.write("THE MULTIPLICATION TABLE="+"<br>");
for(let i=1;i<=10;i++){
document.write(i+"*"+num+"=");
document.write(i*num+"<br>");
}

}


