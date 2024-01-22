function palindrome(string) 
{
	return string == string.split('').reverse().join('');
}
function palindromeFunction() {

   var string=document.getElementById("string").value;
   var words=string.split(" ");
   
     for( var i = 0 ;i < words.length ;i++)
      { 
        if(palindrome(words[i]))
		{
			if(words[i].length>1)
				{
					var n=words[i].length;
					var rep='*'.repeat(n);
                   			 words[i]=rep;
				}
				
       			 }
		}

     		document.getElementById("result").innerHTML=words.join(' ');
	}

        
