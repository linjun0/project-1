<?php
  header("Content-Type:application/json;CHARSET=UTF-8");
	require_once("init.php");
	@$uname=$_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];

	$sql="SELECT uname,upwd FROM rs_user where uname='$uname' AND upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row!=null){
	  echo json_encode($row);
	}else{
	  echo '-1';
	}
	
?>