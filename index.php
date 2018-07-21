<html>
<head>
<script
  src="http://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous">
</script>


<script type="text/javascript" src="script.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="Timelord.js?<?php echo time(); ?>"></script>

<?php
include('ajax.php');
session_start();
	if(!isset($_SESSION["user"]))
	{
	echo "<script>window.location.replace('http://10.0.0.17/loginPage.php');</script>";
	}
?>

</head>
<body>
<h2>UNLOCK THE BOX!!!</h2>
</br>

<button id="button" value=""></button>

<p id="status"></p>


<h3>Set lock time</h3>

From
<input type=datetime-local step=1 id="fromdate">
</br>
To
<input type=datetime-local step=1 id="todate">

<button id="lockBoxFromTo">Lock in selected Timeframe</Button>
<p id="lockStatus"></p>
</body>


</html>
