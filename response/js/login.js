
var nconfirm=0;
var pconfirm=0;
$login=$("#login-btn");
$name=$("#name");
$pwd=$("#pwd");
$placen=$(".place-n");
$placep=$(".place-p");
$nspan=$(".material-input-name");
$pspan=$(".material-input-pwd")

 

// 同户名
$name.blur(function(e){
  e.preventDefault();
   name=$name.val();
  console.log(name);
  if(name==""){
    $nspan.text("请输入用户名");
    $placen.removeClass("move");
    nconform=0;
  }else{
    $nspan.text("");   
    nconfirm=1;
  }
}).focus(()=>{
  $placen.addClass("move");
  $name.css({
    "border":"0",
	"outline":"0"
  })
 $(".nline").addClass("line");
});

// 密码
$pwd.blur(function(e){
  e.preventDefault();
   pwd=$pwd.val();
  if(pwd==""){
    $pspan.text("请输入密码");
    $placep.removeClass("move");
    pconfirm=0;
  }else{
    $pspan.text("");
    pconfirm=1;
  }
}).focus(()=>{
  $placep.addClass("move");
	console.log();
    $pwd.css({
		'border':'0',
		"outline":"0"
	});
    $(".pline").addClass("line");
    console.log("111111111")
})

// 发送验证
$login.click(function(e){
   e.preventDefault();
    
   if(nconfirm==1&&pconfirm==1){
     console.log(name);
     
     $.ajax({
     type:"POST",
     url:"data/login.php",
     data:{uname:name,upwd:pwd},
  
     success:function(data){       
       if(data=="-1"){
          $pspan.text("请输入正确的用户名或密码");
       }else{
         $login.val("登陆中");
         //	location.href=("index.html");
		 
		 $(".modal-backdrop").removeClass('in');
		 $(".modal").css("display","none");
          $(".Login").css("display","none");
          $("#come-user").text("欢迎回来 "+data.uname).css("display","block");
                    
       }
     },
     error:function(){
       alert("网络错误");
     }

     })
   }else{
     $pspan.text("请输入正确的用户名或密码");
   }
   
})


   



