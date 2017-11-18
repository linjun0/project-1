<?php
  header("Content-Type:text/plain;charset=UTF-8");
    @$uname=$_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];
	@$email=$_REQUEST["email"];
	@$phone=$_REQUEST["phone"];
    @$gender=$_REQUEST["gender"];
    require("init.php");
 
        $sql="insert into rs_user values(NULL,'$uname','$upwd','$email','$phone','$gender')";
        $result=mysqli_query($conn,$sql);
        if($result==true){
            echo "注册成功";
        }else{
            echo "注册失败";
        }
    
?>