<?php
    header('Content-Type:application/json');
    require('init.php');
    $dir=$_REQUEST['dir'];
    $lm=$_REQUEST['lm'];
    if($lm=="1"){
        $result=mysqli_query($conn,"SELECT * FROM teaminfo WHERE lm=$dir ORDER BY wins DESC");
        $rows= mysqli_fetch_all($result);
        echo json_encode($rows);
    };
    if($lm!="1"){
        $result=mysqli_query($conn,"SELECT * FROM teaminfo WHERE lm=$dir ORDER BY area,wins DESC");
        $rows= mysqli_fetch_all($result);
        echo json_encode($rows);
    }
?>