<?php

require_once("./connect.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);
$token = implode(",", $jsondata);

$getIDQuery = $conn->prepare("SELECT ID FROM `teachers`
                     WHERE `token` = ?");

$getIDQuery->bind_param("s", $token);

//print_r($getStudentsQuery);

$getIDQuery->execute();

$getIDQuery->store_result();
$teacher_ID = null;
$getIDQuery->bind_result($teacher_ID);

$idResults = [];

if($getIDQuery->num_rows>0){
    while($getIDQuery->fetch()){
        $idResults['successGettingId'] = true;
    }
} else {
    $idResults['error'] = "ID doesn't match anything";
    print(json_encode($idResults));
    exit();
}

$getStudentsQuery = "SELECT st.ID, st.student_number, st.name, st.age, st.year, st.GPA, st.tardy, st.absent,
                      s.class1, s.class1_grade, s.class2, s.class2_grade, s.class3, s.class3_grade, s.class4, s.class4_grade, s.class5, s.class5_grade, s.class6, s.class6_grade
                      FROM `student_classes` AS s
                      JOIN `teachers` AS t
                      ON (class1_teacher_id = 1) OR (class2_teacher_id = 1) 
                      OR (class3_teacher_id = 1) OR (class4_teacher_id = 1) 
                      OR (class5_teacher_id = 1) OR (class6_teacher_id = 1)
                      left JOIN `students` AS st 
                      ON st.ID = s.student_id";

//print_r($getStudentsQuery);

$result = mysqli_query($conn, $getStudentsQuery);
$data = [];
$teacherList = [];

if ($result) {
    if (mysqli_num_rows($result) > 0) {
        while ($classRow = mysqli_fetch_assoc($result)) {
            $data[] = $classRow;
        }
        $teacherList['studentData'] = $data;
    } else {
        $teacherList['error'] = 'no data!';
    }
} else {
    $teacherList['error'] = 'query failed!';
}


print(json_encode($teacherList));
















//$getStudentsQuery->bind_param("ssssss",$teacher_ID,$teacher_ID,$teacher_ID, $teacher_ID, $teacher_ID, $teacher_ID);

//$getStudentsQuery->execute();
//$getStudentsQuery->store_result();
//
//print_r($getStudentsQuery);
//
////print_r($getStudentsQuery);
//$studentsList = [];
//
//if($getStudentsQuery->num_rows>0){
//    while($row = $getStudentsQuery->fetch()) {
//        $studentsList[] = $row;
//    }
//    $studentsListData['success'] = true;
//    $studentsListData['data'] = $studentsList;
//} else {
//    $studentsListData['error'] = "No students matched";
//    print(json_encode($studentsListData));
//    exit();
//}
//
//print_r($studentsListData);

?>