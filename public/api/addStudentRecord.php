<?php

require_once("./connect.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);

print_r($jsondata);


$values = array_values($jsondata);
$length = count($values[0]);

$array1 = array_slice($values, 0, 6);
$array2 = array_slice($values, 6, $length);

//print_r($array1);
print_r($array2);


$keys = array_keys($values[0]);
$insertKeys = implode(',', $keys);

//print_r($insertKeys);

$valuesToInsert = implode(',', $values[0]);
//print_r($valuesToInsert);

$addStudentQuery = "INSERT INTO `students`
                    SET (" . $insertKeys . ")
                    VALUES (" . $valuesToInsert . ")";

$result = mysqli_query($conn, $addStudentQuery);

//print $result;

$output = [];
if($result) {
    if (mysqli_num_rows($result) > 0) {
        $output['success'] = true;
    } else {
        $output['error'] = 'query failed!';
    }
} else {
    $output['result'] = "result is not true";
}

//print_r($output);
?>