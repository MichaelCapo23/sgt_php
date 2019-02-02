<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
//$jwt = require_once('../../config/token_hash.js');

$output = [
    'successLogin' => false
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

$checkForUserQuery -> bind_param("ss", $email, $password);

//print_r($checkForUserQuery);

$checkForUserQuery->execute();

$AccountID = null;
$checkForUserQuery->store_result();
$checkForUserQuery->bind_result($AccountID);
//print $checkForUserQuery->num_rows;
if($checkForUserQuery->num_rows>0){
    while($checkForUserQuery->fetch()){
//        print "i got here";
        $output['successLogin'] = true;
    }
} else {
    $output['error'] = "no data";
    print(json_encode($output));
    exit();
}

$token = "1234567890"; //keep for now until composer is figured out
$loggedinQuery = $conn->prepare("INSERT INTO `loggedin`
                                      (accounts_id, token)
                                      VALUES (?, ?)");

$loggedinQuery -> bind_param("ss", $AccountID, $token);
$loggedinQuery->execute();
$loggedinQuery->store_result();

if($loggedinQuery->affected_rows>0) {
    $output['loggedinUser'] = true;
    $output['token'] = "1234567890";
} else {
    $output['successLogin'] = false;
    $output['loggedinUser'] = false;
    $output['error'] = "loggedin table error";
}

print(json_encode($output));

?>