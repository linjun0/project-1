  var result=true;
  var $uname=$(".char-uname");
  var $upwd=$(".char-upwd");
  var $cpwd=$(".char-cpwd");

    function vali($input,reg,url){
        var $span=$input.next();
        if($input.val()==""){
          $span.text("不能为空");
          result=false;
        }else if(reg.test($input.val())){ 
            console.log(1111111);
             $span.text("");
            $.get(url,$input.attr("class").slice(5)+"="+$input.val())
            .then(data=>{
                if(data==1){
                    $span.text("可用");  
                    result=true;               
                }else{
                    $span.text("不可用");
                    result=false;
                }
            }) 
        }else{
            $span.text("格式不正确");
        }       
    }
  $uname.blur(()=>{
      vali($uname,/./,"data/yann.php");
  })
  
//   $upwd.blur(()=>{
//      vali($upwd,/./,);
//   })
   function checkPwd($checkp){
      if($checkp.val()==$upwd.val()){
          $checkp.next().text("");
          redult=true;
      }else{
          $checkp.next().text("密码不相同");      
      }
  }
  $cpwd.blur(()=>{
      checkPwd($cpwd);
  })

  $(".char-email").blur(()=>{
      vali($(".char-email"),/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,"data/yane.php");
  })
  $(".char-phone").blur(()=>{
      vali($(".char-phone"),/^[1][3,4,5,7,8][0-9]{9}$/,"data/yanp.php");
  })

  $(".register").click(e=>{ 
      
          if(result){  
              $.ajax({
                type:"POST",
                url:"data/register.php",
                data:{
                    uname:$uname.val(),
                    upwd:$upwd.val(),
                    email:$(".char-email").val(),
                    phone:$(".char-phone").val(),
                    gender:$("#gen").val()
                },
                success:function(data){
                    console.log(data);
                },
                error:function(){
                    alert("网络错误");
                }

              })       
            //  $(e.target).ajaxSubmit(data=>{
            //    alert.data;
            // })
          }
  })






