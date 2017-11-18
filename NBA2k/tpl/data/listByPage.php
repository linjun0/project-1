<?php
    header('Content-Type:application/json');
    require('init.php');
    $n=$_REQUEST['num'];
    $order=$_REQUEST['order'];
    $start=$n*$_REQUEST['start'];
    $total=mysqli_query($conn,"SELECT*FROM com_info");
    $result=mysqli_query($conn,"SELECT*FROM com_info ORDER BY $order LIMIT $start,$n ");
    $rows1=mysqli_fetch_all($total);
    $rows=mysqli_fetch_all($result);
    $m=ceil(count($rows1)/$n);
    $rows[count($rows)]=$m;
    echo json_encode($rows)
?>