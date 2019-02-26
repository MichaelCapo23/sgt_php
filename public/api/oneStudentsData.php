<?php

$jsonData = file_get_contents("php://input");
$postData = json_decode($jsonData);

?>