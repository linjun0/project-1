<?php
 header("Content-Type:text/plain;charset=UTF-8");
 @$email=$_REQUEST["email"];
  require("init.php");
  $sql="select email from rs_user where email='$email'";
    $result=mysqli_query($conn,$sql);
    $row = mysqli_fetch_row($result);
    if($row){
        echo -1;                 
    }else{
        echo 1;
    }
?>