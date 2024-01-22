function weekFunction() {
   
const date=parseInt(document.getElementById('date').value);

switch(date)
{
	case 1: document.getElementById("weekCalculator").innerHTML = "It is Sunday";
			    break;
		case 2: document.getElementById("weekCalculator").innerHTML = "It is Monday";
			    break;
		case 3: document.getElementById("weekCalculator").innerHTML = "It is Tuesday";
			    break;
		case 4: document.getElementById("weekCalculator").innerHTML = "It is Wednesday";
			    break;
		case 5: document.getElementById("weekCalculator").innerHTML = "It is Thursday";
			    break;
		case 6: document.getElementById("weekCalculator").innerHTML = "It is Friday";
			    break;
		case 7: document.getElementById("weekCalculator").innerHTML = "It is Saturday";
			    break;
		default: document.getElementById("weekCalculator").innerHTML = "Invalid input!!!";
			      break;
	}


}



