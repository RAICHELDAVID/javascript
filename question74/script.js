function characterFrequencyFunction() {

   var string=document.getElementById("string").value;
   
     for( let i = 0 ;i < string.length ;i++)
      { 
       
        let count = 0;
        for( let j = 0 ;j < string.length ;j++)
        {
          if( string[i] == string[j] && i > j  )
          {
           break;
          }
          if( string[i] == string[j]  )
          {
            count++;
          }
        }
        if( count > 0){
		
		document.write("The frequency of alphabet "+string[i]+" is "+count);

       
        }
       document.write(" ");
} 
      


}



