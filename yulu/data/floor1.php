<?php
  header("Content-Type:application/json;charset=UTF-8");
  $conn=mysqli_connect("127.0.0.1","root","","yulu","3306");
  mysqli_query($conn,"SET NAMES UTF8");
  
  $f1=$_REQUEST["f1"];
  $sql="SELECT imgl,headl,contl,imgr,headr,contr FROM floor1 WHERE f1id=$f1";    
  $result=mysqli_query($conn,$sql); 
  $rowList = mysqli_fetch_assoc($result);
  
  if($rowList==null){
   echo "查询失败";
  }else{
   echo json_encode($rowList);
  }

?>