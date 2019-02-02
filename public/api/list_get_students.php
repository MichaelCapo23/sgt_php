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
$count = 1;

while ($row = mysqli_fetch_assoc($result)) {
    $studentListData = $row;
    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $studentListData[] = $row;
                $count++;
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
//print(json_encode($outputList));

$ID = $outputList['studentData']['ID'];

$arrayOfIDs = [];


for($index = 0; $index < $count-1; $index++) {
    $arrayOfIDs[$index] = $outputList['studentData'][$index]['ID'];
}
array_unshift($arrayOfIDs , $ID);
array_pop($arrayOfIDs);
//print_r($arrayOfIDs);
$keys = array_values($arrayOfIDs);
print_r($keys);

$implodedKeys = implode(',', $keys);


$getClassInfoQuery = "SELECT *
                      FROM student_classes
                      WHERE student_id IN (".$implodedKeys .")";

print($getClassInfoQuery);


//$checkForUserQuery -> bind_param("ss", $getClassInfoQuery, $keys);

$result = mysqli_query($conn, $getClassInfoQuery);

print_r($result);


//$ClassResults = mysqli_query($conn, $getClassInfoQuery);
//
//$classOutput = [
//    'success' => false,
//    'data' => "",
//];
//$studentClassData = [];
//
//while ($classRow = mysqli_fetch_assoc($ClassResults)) {
//    $studentClassData = $classRow;
//    if ($ClassResults) {
//        if (mysqli_num_rows($ClassResults) > 0) {
//            while ($classRow = mysqli_fetch_assoc($ClassResults)) {
//                $studentClassData[] = $classRow;
//            }
//            $classOutput['success'] = true;
//            $classOutput['studentData'] = $studentListData;
//            $classOutput['classData'] = $studentClassData;
//
//        } else {
//            $classOutput['error'] = 'no data!';
//        }
//    } else {
//        $classOutput['error'] = 'query failed!';
//    }
//}
//
//print(json_encode($classOutput));

?>