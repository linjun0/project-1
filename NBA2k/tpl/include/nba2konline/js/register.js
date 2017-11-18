/**
 * Created by bjwsl-001 on 2017/6/5.
 */
var btn=document.getElementById('register');
btn.onclick=function(e){
    e.preventDefault();
    var n=username.value;
    var p=userpwd.value;
    var m=uemail.value;
    //发起ajax异步请求post
    //1:创建对象
    var xhr = new XMLHttpRequest();
    //2:绑定事件
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.status===200){
            var msg = parseInt(xhr.responseText);
            if(msg>0){
                alert("注册成功!");
                uname.value = '';
                upwd.value = '';
                uemail.value = '';
            }else{
                alert("注册失败");
            }
        }
    }
    xhr.open('POST','data/register.php',true);
    //3.1:修改请求消息头部，编码
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    //4:发送请求

    xhr.send(`&uname=${n}&upwd=${p}&uemail=${m}`);
}