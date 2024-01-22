function reverseVowelsFunction() {

var string=document.getElementById('string').value;
  if (string.length <= 1) 
{ 
document.getElementById("displayResult").value=string; 
return;
}
  const str = [];
  let left = 0;
  let right = string.length - 1;
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  while(left < right) {
    if (set.has(str[left]) && set.has(str[right])) {
      [str[right], str[left]] = [str[left], str[right]];      
      left++;
      right--;
    } else if (set.has(str[left])) {
      right--;
    } else {
      left++;
    }
  }
  document.getElementById('displayResult').value=str.join('');
}





