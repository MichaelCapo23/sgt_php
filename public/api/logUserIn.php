<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
//$jwt = require_once('../../config/token_hash.js');

$output = [
    'success' => false
];

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);


$email = $jsondata['email'];
$password = $jsondata['password'];
$token = $jsondata['token'];


$checkForUserQuery = $conn->prepare("SELECT ID
                      FROM `accounts`
                      WHERE email = ?
                      AND password = ?");
//
$checkForUserQuery -> bind_param("ss", $email, $password);

$checkForUserQuery->execute();

$AccountID = null;
$checkForUserQuery->store_result();
$checkForUserQuery->bind_result($AccountID);
if($checkForUserQuery->num_rows>0){
    while($checkForUserQuery->fetch()){
        $output['success'] = true;
        $output['token'] = "1234567890";
    }
} else {
    $output['error'] = "no data";
}

print(json_encode($output));




?>