<?php
    header('Content-Type:application/json');
    require('init.php');
    $n=$_REQUEST['uname'] or die("1");
    $p=$_REQUEST['upwd'] or die("2");
    $sql="INSERT INTO user_info VALUES (NULL,'$n','$p')" or die("3");
    $result=mysqli_query($conn,$sql);
    if($result==false){
        echo '55';
    }else{
        echo '66';
    }
?>