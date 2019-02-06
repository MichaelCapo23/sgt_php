<?php

require_once("./connect.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);
$values = array_values($jsondata);

$studentValues = array_splice($values[0], 0, 6);

function stringify($value)
{
    return (string)$value;
}

$realValues = array_map("stringify", $studentValues);

$studentKeys = array_splice($values[0], 0, 6);

$insertStudentKeys = implode(",", $studentKeys);

function add_quotes($realValues)
{
    return sprintf("'%s'", $realValues);
}

$insertStudentValues = implode(',', array_map('add_quotes', $realValues));


$addStudentQuery = "INSERT INTO `students`
                    ($insertStudentKeys)
                    VALUES ($insertStudentValues)";


$result = mysqli_query($conn, $addStudentQuery);

$output = [];
if ($result) {
    $last_id = mysqli_insert_id($conn);
    $output['StudentSuccess'] = true;
} else {
    $output['StudentError'] = "query failed";
}

$student_id = "student_id";


$className = array_splice($values[0], 0, 6);
$classGrades = array_splice($values[0], 0, 6);
$classNumbers = array_splice($values[0], 0, 6);
$classGradeNumbers = array_splice($values[0], 0, 6);

$tableKeys = array_merge($classNumbers, $classGradeNumbers);
$tableValues = array_merge($className, $classGrades);
array_unshift($tableKeys, $student_id);
array_unshift($tableValues, $last_id);

$insertClassKeys = implode(",", $tableKeys);
function add_quote($gradeValues)
{
    return sprintf("'%s'", $gradeValues);
}

$insertClassValues = implode(',', array_map('add_quote', $tableValues));

$addClassesQuery = "INSERT INTO `student_classes`
                    ($insertClassKeys)
                    VALUES ($insertClassValues)";

print_r($addClassesQuery);

$classResult = mysqli_query($conn, $addClassesQuery);

if ($classResult) {
    $output['ClassSuccess'] = true;
} else {
    $output['Classerror'] = "result is false";
}

print_r($output);


?>