<?php
require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

//decided to practice procedural

$outputList = [
    'success' => false
];

$getStudentDataQuery = "SELECT *
                        FROM `students`";

$result = mysqli_query($conn, $getStudentDataQuery);

$studentListData = [];

while ($row = mysqli_fetch_assoc($result)) {
    $studentListData = $row;
    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $studentListData[] = $row;
            }
//            $outputList['success'] = true;
            $outputList['studentData'] = $studentListData;
        } else {
            $outputList['error'] = 'no data!';
        }
    } else {
        $outputList['error'] = 'query failed!';
    }
}

$ID = $outputList['studentData']['ID'];


$getClassInfoQuery = "SELECT *
                      FROM `student_classes`
                      WHERE student_id = $ID";

$ClassResults = mysqli_query($conn, $getClassInfoQuery);

$classOutput = [
    'success' => false,
    'data' => "",
];
$studentClassData = [];

while ($classRow = mysqli_fetch_assoc($ClassResults)) {
    $studentClassData = $classRow;
    if ($ClassResults) {
        if (mysqli_num_rows($ClassResults) > 0) {
            while ($classRow = mysqli_fetch_assoc($ClassResults)) {
                $studentClassData[] = $classRow;
            }
            $classOutput['success'] = true;
            $classOutput['data'] = array_merge($outputList['studentData'],$studentClassData);
        } else {
            $classOutput['error'] = 'no data!';
        }
    } else {
        $classOutput['error'] = 'query failed!';
    }
}

print(json_encode($classOutput));

?>