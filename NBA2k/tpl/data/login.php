<?php
    header('Content-Type:application/json;charset=utf-8');
    require('init.php');
    $n=$_REQUEST['uname'];
    $result=mysqli_query($conn,"SELECT*FROM user_info WHERE uname='$n'");
    $rows=mysqli_fetch_all($result);
    echo json_encode($rows)
?>