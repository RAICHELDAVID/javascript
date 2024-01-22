function stringPalindromeFunction() {
   
   const string=document.getElementById("string").value;
var letters=/^[A-Za-z]+$/;
if(string.value.match.............................................................................................................................................














































































0
000
(letters)){
let revString="";
   for(let i=string.length-1;i>=0;i--){
     revString+=string[i];		


}
if(revString==string){
document.getElementById('displayText').innerHTML="IT IS A PALINDROME";

		
}
else{
			document.getElementById('displayText').innerHTML="IT IS NOT PALINDROME";

}
return;
}
else{
alert("please enter valid data");
return;

}


}


