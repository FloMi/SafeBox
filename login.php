<?php
$pin = $_POST['pin'];

if($pin === "11111"){
	session_start();	
	$_SESSION["user"] = "user";
	echo "<script>window.location.replace('http://10.0.0.17');</script>";
}

if($pin === "22222"){
	session_start();	
	$_SESSION["user"] = "admin";
	echo "<script>window.location.replace('http://10.0.0.17');</script>";
}


else{
	echo "<script>window.location.replace('/loginPage.php');</script>";	
}
 ?>
