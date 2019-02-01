<?php

require_once("./connect.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$listOfParams = file_get_contents("php://input");
$decodedParams = json_decode($listOfParams, true);

print_r($listOfParams);

?>