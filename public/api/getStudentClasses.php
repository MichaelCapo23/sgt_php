<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

//decided to practice procedural

$output = [
    'success' => false
];

$getStudentDataQuery = "SELECT *
                        FROM `student_classes`";

$result = mysqli_query($conn, $getStudentDataQuery);

$data = [];

//$jsonToken = file_get_contents("php://input");
//$token = json_decode($postdata, true);
//
//if(!$token) {
//    $output['error'] = "token error";
//    print(json_encode($output));
//}

while ($row = mysqli_fetch_assoc($result)) {
    $data = $row;
    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
            $output['success'] = true;
            $output['data'] = $data;
        } else {
            $output['error'] = 'no data!';
        }
    } else {
        $output['error'] = 'query failed!';
    }
}

print(json_encode($output));

?>