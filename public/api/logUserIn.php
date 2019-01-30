<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");


$output = [
    'success' => false
];

//echo $_POST['data'];
//echo http_get_request_body('/api/logUserIn.php');


//$checkForUserQuery = $conn->prepare("SELECT ID
//                      FROM `accounts`
//                      WHERE(username, password)
//                      VALUES (?, ?)");
//
//$checkForUserQuery -> bind_param("sss", $username, $password);
//
//$data = [];


?>