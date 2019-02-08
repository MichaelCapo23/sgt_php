<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsonData = json_decode($postdata, true);
$values = array_values($jsonData);

print_r($values);
$ID = $values[0][36];

$studentValues = array_splice($values[0], 0, 6);

$value1 = $studentValues[0];
$value2 = $studentValues[1];
$value3 = $studentValues[2];
$value4 = $studentValues[3];
$value5 = $studentValues[4];
$value6 = $studentValues[5];



$studentKeys = array_splice($values[0], 0, 6);
$key1 = $studentKeys[0];
$key2 = $studentKeys[1];
$key3 = $studentKeys[2];
$key4 = $studentKeys[3];
$key5 = $studentKeys[4];
$key6 = $studentKeys[5];



$addStudentQuery = "UPDATE `students`
                    SET $key1 = '$value1',
                    $key2 = '$value2',
                    $key3 = '$value3',
                    $key4 = '$value4',
                    $key5 = '$value5',
                    $key6 = '$value6'
                    WHERE `ID` = '$ID'";

print_r($addStudentQuery);

$result = mysqli_query($conn, $addStudentQuery);

$output = [];
if ($result) {
    $output['StudentSuccess'] = true;
} else {
    $output['StudentError'] = "query failed";
}

$className = array_splice($values[0], 0, 6);
$classGrades = array_splice($values[0], 0, 6);
$classNumbers = array_splice($values[0], 0, 6);
$classGradeNumbers = array_splice($values[0], 0, 6);

$tableKeys = array_merge($classNumbers, $classGradeNumbers);
$key1 = $tableKeys[0];
$key2 = $tableKeys[1];
$key3 = $tableKeys[2];
$key4 = $tableKeys[3];
$key5 = $tableKeys[4];
$key6 = $tableKeys[5];
$key7 = $tableKeys[6];
$key8 = $tableKeys[7];
$key9 = $tableKeys[8];
$key10 = $tableKeys[9];
$key11 = $tableKeys[10];
$key12 = $tableKeys[11];

$tableValues = array_merge($className, $classGrades);
$value1 = $tableValues[0];
$value2 = $tableValues[1];
$value3 = $tableValues[2];
$value4 = $tableValues[3];
$value5 = $tableValues[4];
$value6 = $tableValues[5];
$value7 = $tableValues[6];
$value8 = $tableValues[7];
$value9 = $tableValues[8];
$value10 = $tableValues[9];
$value11 = $tableValues[10];
$value12 = $tableValues[11];


$student_id = implode($ID);

echo "<br>";
print_r($student_id);
echo "<br>";


$addClassesQuery = "UPDATE `student_classes`
                    SET $key1 = '$value1',
                    $key2 = '$value2',
                    $key3 = '$value3',
                    $key4 = '$value4',
                    $key5 = '$value5',
                    $key6 = '$value6',
                    $key7 = '$value7',
                    $key8 = '$value8',
                    $key9 = '$value9',
                    $key10 = '$value10',
                    $key11 = '$value11',
                    $key12 = '$value12'
                    WHERE `student_id` = '$ID'";

print_r($addClassesQuery);

$classResult = mysqli_query($conn, $addClassesQuery);

if ($classResult) {
    $output['ClassSuccess'] = true;
} else {
    $output['Classerror'] = "query failed";
}

print_r($output);



















?>