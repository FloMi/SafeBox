$.ajaxSetup({cache: false});

$(document).ready(function(){

//Datumsfel auf aktuelles datum setzern

var today = new Date();
var inaweek = new Date(today);
inaweek.setDate(inaweek.getDate()+7);
console.log(FormatDate(today));
document.getElementById("fromdate").defaultValue = FormatDate(today);;
document.getElementById("todate").defaultValue = FormatDate(inaweek);

//Execute TimeLortd once



jQuery.get('data/lockState.txt', function(data) {
	if(data === "unlocked")
	{
	document.getElementById("button").value = "lock";
	document.getElementById("button").innerHTML = "lock";	
	}
	else
	{
	document.getElementById("button").value = "unlock";
	document.getElementById("button").innerHTML = "unlock";
	}
});


$('#button').click(function(){


        var clickBtnValue = $(this).val();      
	
	var xmlhttp = new XMLHttpRequest();
        
	xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("status").innerHTML = this.responseText;
            
jQuery.get('data/lockState.txt', function(data) {
	if(data === "unlocked")
	{

	document.getElementById("button").value = "lock";
	document.getElementById("button").innerHTML = "lock";
	}
	else
	{
	document.getElementById("button").innerHTML = "unlock";
	document.getElementById("button").value = "unlock";
	}

	});		
    }
        };
        console.log(clickBtnValue);
        xmlhttp.open("GET", "ajax.php?q=" + clickBtnValue, true);
        xmlhttp.send();
    });

$('#lockBoxFromTo').click(function(){

    var from = document.getElementById("fromdate").value;      
    var to = document.getElementById("todate").value;      
    


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
	    console.log("seas");
	 document.getElementById("lockStatus").innerHTML = this.responseText;
    }  
    

};
xmlhttp.open("GET", "ajaxDate.php?from=" + from+"&to="+to, true);
    console.log("from: "+from);        
    xmlhttp.send();
});


}); //documentrdy end klammern



function FormatDate(date)
{
var dd = date.getDate();
var mm = date.getMonth()+1;
var yyyy = date.getFullYear();

var h = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 

if(h<10){
    h='0'+h;
}
if(min<10){
    min='0'+min;
}
if(sec<10){
    sec='0'+sec;
}

var today = yyyy+'-'+mm+'-'+dd+'T'+h+':'+min+':'+sec;
return today;
}

function checkpin()
{
alert("pleas enter your Pi to contiue");	
}




