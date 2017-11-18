$(function(){
    //2:涓虹櫥褰曚俊鎭寜閽粦瀹氱偣鍑讳簨浠?
    $("#bt-login").click(function(e){
        e.preventDefault();
        //3:鑾峰彇鐢ㄦ埛鍚嶅拰瀵嗙爜
        var u = $("#uname").val();
        var p = $("#upwd").val();
        //4:鍙戦?乤jax璇锋眰
        $.ajax({
            type:'post',
            url:'data/login_do.php',
            data:{uname:u,upwd:p},
            success:function(data){
                var rs = parseInt(data);
                if(rs<0){
                    alert('输入的用户名或密码不正确');
                }else{
                    alert('登陆成功');
                    $(".cd-user-modal").hide();
                    document.cookie = 'uid='+data;
                    document.cookie = 'uname='+u;
                }
            }

        });
    });

});
