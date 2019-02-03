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
                        FROM `students` ORDER BY `ID` ASC";

$result = mysqli_query($conn, $getStudentDataQuery);

$studentListData = [];
$count = 1;

if ($result) {
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $studentListData[] = $row;
            $count++;
        }

        $outputList['studentData'] = $studentListData;
    } else {
        $outputList['error'] = 'no data!';
    }
} else {
    $outputList['error'] = 'query failed!';
}

$arrayOfIDs = [];

for ($index = 0; $index < $count - 1; $index++) {
    $arrayOfIDs[$index] = $outputList['studentData'][$index]['ID'];
}

$implodedKeys = implode(',', $arrayOfIDs);

$getClassInfoQuery = "SELECT *
                      FROM student_classes
                      WHERE student_id IN (" . $implodedKeys . ") ORDER BY `student_id` ASC";

$result = mysqli_query($conn, $getClassInfoQuery);

//$ClassResults = mysqli_query($conn, $getClassInfoQuery);

$classOutput = [
    'success' => false,
    'data' => "",
];
$studentClassData = [];

if ($result) {
    if (mysqli_num_rows($result) > 0) {
        while ($classRow = mysqli_fetch_assoc($result)) {
            $studentClassData[] = $classRow;
        }
        $classOutput['success'] = true;
        $classOutput['studentData'] = $studentListData;
        $classOutput['classData'] = $studentClassData;
    } else {
        $classOutput['error'] = 'no data!';
    }
} else {
    $classOutput['error'] = 'query failed!';
}


print(json_encode($classOutput));

?>