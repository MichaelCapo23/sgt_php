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

$result = $checkForUserQuery->execute();
print $result;

$AccountID = null;
$checkForUserQuery->store_result();
$checkForUserQuery->bind_result($AccountID);
print_r($checkForUserQuery);
if($checkForUserQuery->num_rows>0){
    $data = [];
    while($row = $checkForUserQuery->fetch()){
        $data[] = $row;
        print_r($data);
        $output['success'] = true;
        $output['token'] = $data;
    }
} else {
    $output['error'] = "no data";
}

print(json_encode($output));


//while($row = mysqli_fetch_assoc($result)) {
//    $data = $row;
//    if($result) {
//        if(mysqli_num_rows($result) > 0) {
//            while($row = mysqli_fetch_assoc($result)) {
//                $data[] = $row;
//            }
//            $token = $jwt.encode($username . $password . date("h:i:sa"));
//            print $token;
//            $output['success'] = true;
//            $output['token'] = $token;
//        } else {
//            $output['error'] = "no data";
//        }
//    } else {
//        $output['error'] = "error with query";
//    }
//}


?>