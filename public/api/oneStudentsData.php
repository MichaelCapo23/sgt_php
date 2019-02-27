<?php

require_once("./connect.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);
$token = implode(",", $jsondata);

$preparedOneStudentQuery = "SELECT s.ID, s.student_number, s.name, s.age, s.year, s.GPA, s.tardy, s.absent,
                    sc.class1, sc.class1_grade, sc.class2, sc.class2_grade, sc.class3, sc.class3_grade, sc.class4, sc.class4_grade, sc.class5, sc.class5_grade, sc.class6, sc.class6_grade
                    FROM `student_classes` AS sc
                    JOIN `students` AS s ON s.ID = student_id
                    WHERE  student_id =( '$token' )";

$result = mysqli_query($conn, $preparedOneStudentQuery);
$data = [];

if ($result) {
    if (mysqli_num_rows($result) > 0) {
        while ($classRow = mysqli_fetch_assoc($result)) {
            $data[] = $classRow;
        }
        $oneStudentData['studentData'] = $data;
    } else {
        $oneStudentData['error'] = 'no data!';
    }
} else {
    $oneStudentData['error'] = 'query failed!';
}

print_r(json_encode($oneStudentData))


?>