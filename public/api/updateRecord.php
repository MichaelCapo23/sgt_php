<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsonData = json_decode($postdata, true);
$values = array_values($jsonData);

$studentValues = array_splice($values[0], 0, 6);
$studentKeys = array_splice($values[0], 0, 6);

//print_r($studentValues);
//print_r($studentKeys);


function add_quotes($studentValues)
{
    return sprintf("'%s'", $studentValues);
}
$insertStudentKeys = implode(",", $studentKeys);
$insertStudentValues = implode(',', array_map('add_quotes', $studentValues));

$addStudentQuery = "UPDATE `students`
                    SET ($insertStudentKeys)
                    VALUES ($insertStudentValues)";


$result = mysqli_query($conn, $addStudentQuery);

$output = [];
if ($result) {
    $output['StudentSuccess'] = true;
} else {
    $output['StudentError'] = "query failed";
}

$student_id = "student_id";


$className = array_splice($values[0], 0, 6);
$classGrades = array_splice($values[0], 0, 6);
$classNumbers = array_splice($values[0], 0, 6);
$classGradeNumbers = array_splice($values[0], 0, 6);

print_r($className);
echo '<br>';
print_r($classGrades);
echo '<br>';

$tableKeys = array_merge($classNumbers, $classGradeNumbers);
$tableValues = array_merge($className, $classGrades);

$insertClassKeys = implode(",", $tableKeys);
function add_quote($gradeValues)
{
    return sprintf("'%s'", $gradeValues);
}

$insertClassValues = implode(',', array_map('add_quote', $tableValues));

$addClassesQuery = "UPDATE `student_classes`
                    SET ($insertClassKeys)
                    VALUES ($insertClassValues)";

print_r($addClassesQuery);

$classResult = mysqli_query($conn, $addClassesQuery);

if ($classResult) {
    $output['ClassSuccess'] = true;
} else {
    $output['Classerror'] = "query failed";
}

print_r($output);



















?>