<?php
  header("Content-Type:application/json;charset=UTF-8");
  $conn=mysqli_connect("127.0.0.1","root","","yulu","3306");
  mysqli_query($conn,"SET NAMES UTF8");

  $f2=$_REQUEST["f2"];
  $output=[];
  
 
  $sql="SELECT imgl,headl,contl,imgr,headr,contr FROM floor2 WHERE f2id=$f2";
  $result=mysqli_query($conn,$sql);
  $center=mysqli_fetch_assoc($result);
  $output[]=$center;

  $sql="SELECT ftid,f2p,f2num FROM f2_title WHERE f2nid=$f2";
  $result=mysqli_query($conn,$sql);
  $title = mysqli_fetch_all($result,MYSQLI_ASSOC);
  $output[]=$title;

  if($output==null){
   echo "查询失败";
  }else{	  
	echo json_encode($output);
  }
