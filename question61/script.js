function indexFindingFunction() {
   
   const string=document.getElementById("string").value;
   const char=document.getElementById("char").value;

for(let i=0;i<string.length;i++){
if(string[i]==char){
document.getElementById('displayResult').value=string.indexOf(char);
return;
}
}
document.getElementById('displayResult').value=-1;



}


