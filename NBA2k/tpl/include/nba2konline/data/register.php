<?php
  header("Content-Type:text/plain");

  @$n = $_REQUEST['uname']or die('-1');
  @$p = $_REQUEST['upwd']or die('-2');
  @$m = $_REQUEST['uemail']or die('-3');
  //2:连接数据库
  require('init.php');
  //3:创建sql
  $sql = "INSERT INTO t_login VALUES(null,'$n','$p','$m')";
  $result = mysqli_query($conn,$sql);
  //4:判断输出
  if($result === false){
	  echo "-4";
  }else{
     $num = mysqli_affected_rows($conn);
	 if($num>0){
	    echo "1";
	 }else{
	    echo "-5";
	 }
  }
?>