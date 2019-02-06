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

$gradeValues = array_splice($values[0], 0, 2);

$gradeKeys = array_splice($values[0], 0, 2);

$insertStudentKeys = implode(",", $studentKeys);

$insertStudentKeys = implode(",", $studentKeys);

function add_quotes($realValues)
{
    return sprintf("'%s'", $realValues);
}

$insertStudentValues = implode(',', array_map('add_quotes', $realValues));


$addStudentQuery = "INSERT INTO `students`
                    ($insertStudentKeys)
                    VALUES ($insertStudentValues)";


//print($addStudentQuery);
$result = mysqli_query($conn, $addStudentQuery);

$output = [];
if ($result) {
    if (mysqli_num_rows($result) > 0) {
        $output['StudentSuccess'] = true;
    } else {
        $output['StudentError'] = 'query failed!';
    }
} else {
    $output['StudentError'] = "result is false";
}

$insertClassKeys = implode(",", $gradeKeys);

function add_quote($gradeValues)
{
    return sprintf("'%s'", $gradeValues);
}

$insertClassValues = implode(',', array_map('add_quote', $gradeValues));


$addClassesQuery = "INSERT INTO `student_classes`
                    ($insertClassKeys)
                    VALUES ($insertClassValues)";

print_r($addClassesQuery);

$classResult = mysqli_query($conn, $addClassesQuery);

if ($classResult) {
    $output['Classerror'] = "result is false";
}

print_r($output);


?>