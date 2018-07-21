<?php
session_start();

switch ($_REQUEST["q"]) {
        case 'unlock':
            unlock();
            break;
        case 'lock':
            lock();
            break;
        case 'unlockp':
            unlockp();
            break;
        case 'lockp':
            lockp();
            break;
    }


function unlock() {
    $dir = "/var/www/html/data";
    
    $state = file_get_contents($dir."/lockState.txt", true);
    
	if($state === "locked"){
    echo "Opening servo";
    
    file_put_contents ($dir.'/lockState.txt', 'unlocked');
	
	echo exec('sudo /var/www/html/openservo.py test');

	
	}
	
	if($state === "lockedp"){
	
	if($_SESSION["user"] === "user")
	{
		echo "Keine Rechte </br>";
		ShowLockDates(file_get_contents($dir."/lockdates.txt", true));
	}

	
	if($_SESSION["user"] === "admin")
	{
	//servo aufmocha
	}

	
	
	}
	
    exit;
}

function lock() {
    $dir = "/var/www/html/data";

	$state = file_get_contents($dir."/lockState.txt", true);
	
	if($state === "unlocked"){

    file_put_contents ($dir.'/lockState.txt', 'locked');
    echo "closing servo";
	echo exec('sudo /var/www/html/closeservo.py test');

	}
	if($state === "locked" || $state === "lockedp"){
		echo "Already Locked";
	}

    exit;
}

function unlockp() {
    echo "The unlockp function is called.";
    
    $dir = "/var/www/html/data";

	$state = file_get_contents($dir."/lockState.txt", true);
	
	if($state === "lockedp"){

    file_put_contents ($dir.'/lockState.txt', 'unlocked');
    echo "Unlocking now";
    //servo aufmachen
	}
    exit;
}

function lockp() {

    $dir = "/var/www/html/data";

    file_put_contents ($dir.'/lockState.txt', 'lockedp');
	
	if($state !== "lockedp"){
		echo "Locking now";
	}
	//Servo zuamocha
	

    exit;
}

function ShowLockDates($lockTime)
{
	$Alldates = explode(";", $lockTime);
	
	echo "Locked at the folowine Times </br>"; 
	array_pop($Alldates);
	for($i = 0;$i< count($Alldates);$i++)
	{
		
	$fromToArr = explode(",", $Alldates[$i]) ;
	
	$fromToArr[0] = str_replace("T", " ", $fromToArr[0]);
	$fromToArr[1] = str_replace("T", " ", $fromToArr[1]);
	
	echo "From: ". $fromToArr[0] . " To:" . $fromToArr[1];
	}	
}
?>
