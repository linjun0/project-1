<?php
 header("Content-Type:text/plain;charset=UTF-8");
 @$phone=$_REQUEST["phone"];
  require("init.php");
  $sql="select phone from rs_user where phone='$phone'";
    $result=mysqli_query($conn,$sql);
    $row = mysqli_fetch_row($result);
    if($row){
        echo -1;                 
    }else{
        echo 1;
    }

?>