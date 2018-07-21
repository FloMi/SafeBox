<?php

$from = $_GET["from"];
$to = $_GET["to"];


    echo "The Box is Locked From: " . $from . " to: " . $to;

    $dir = "/var/www/html/data";

    file_put_contents ($dir.'/lockdates.txt', $from . ',' . $to . ';');

?>
