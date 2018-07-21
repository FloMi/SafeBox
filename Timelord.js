//2018-07-09T13:36:33,2018-07-16T13:36:33
//  0  4 56 89
//var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

$(document).ready(function(){

console.log("T");

var d = new Date();
var Now = d.getFullYear() +"-"+d.getMonth()+"-"+d.getDate() +"T"+ d.getHours()+":"+d.getMinutes()+":"+d.getMinutes;
var lockDates;

jQuery.get('data/lockdates.txt', function(data) {

    var LockDates = data.split(";");
    
    for (i = 1; i < LockDates.length; i++) {

		var FromToArr = LockDates[i-1].split(",");
			console.log(FromToArr);
		var From = new Date(FromToArr[0].substring(0,4),FromToArr[0].substring(5,7)-1,FromToArr[0].substring(8,10),FromToArr[0].substring(11,13),FromToArr[0].substring(14,16),FromToArr[0].substring(17,19));
		var To 	= new Date(FromToArr[1].substring(0,4),FromToArr[1].substring(5,7)-1,FromToArr[1].substring(8,10),FromToArr[1].substring(11,13),FromToArr[1].substring(14,16),FromToArr[1].substring(17,19));	
		if(d.getTime()>From && d.getTime()<To)
		{
			LockBox();
		}
		else
		{

			UnlockBox();
		}
	}

});
});
function UnlockBox()
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
	 document.getElementById("lockStatus").innerHTML = this.responseText;
    }  
 

};
     xmlhttp.open("GET", "ajax.php?q=unlockp", true);
     xmlhttp.send();	
}


function LockBox()
{
	    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
	    console.log("seas");
	 document.getElementById("lockStatus").innerHTML = this.responseText;
    }  
 

};
     xmlhttp.open("GET", "ajax.php?q=lockp", true);
     xmlhttp.send();
}

