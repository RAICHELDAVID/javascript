function missingLetterFunction() {
var string=document.getElementById('string');
for(let i=0;i<string.length;i++){
if(string.charCodeAt(i+1)-string.charCodeAt(i)!=1){
let text = String.fromCharCode(string.charCode(i+1));
document.getElementById('displayText').innerHTML=text;
return;
}

}
}





