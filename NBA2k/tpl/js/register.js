if(sessionStorage['uname']){
    var h=$('.log_reg').html();
    $('.log_reg').html(`<span style="color: white">${sessionStorage['uname']},欢迎登录</span>&nbsp;<a style="cursor: pointer">注销</a>`)
    $('.log_reg a').click(function () {
        sessionStorage['uname']="";
        $('.log_reg').html(h)
    })
}
$('#nav-list').on('mouseenter','li', function () {
    $(this).children('ul').css('height','auto');
});
$('#nav-list').on('mouseleave','li', function () {
    $(this).children('ul').css('height','0');
});

$('.third').on('mouseenter','div', function () {
    $(this).children('div').show()
})
$('.third').on('mouseleave','div', function () {
    $(this).children('div').hide()
});
//注册及登录
$('#registerBtn').click(function () {
    var n=$('#registerName').val();
    var p=$('#registerPassword').val();
    var p2=$('#confirmPassword').val();
    var check;
    var checkboxs=document.getElementsByName('readRule');
    if(checkboxs[0].checked){
            check=1
      }else{
            check=0
    };
    console.log(check);
    if(n&&p&&check&&(p==p2)&&($('#registerCode-error').html()=='验证码输入正确')){
    $.ajax({
        type:'get',
        url:'data/register.php',
        data:{uname:n,upwd:p},
        success: function (data){
            console.log(data)
            if(data=='66'){
                sessionStorage['uname']=n;
                alert('用户注册成功,点击跳转到NBAStore');
                location.href='shop.html';
            }else{
                alert('注册失败')
            }
        },
        err: function (err) {
            console.log(err)
        }
        })
        }else{
        alert("信息填写不完整")
        }
});
$('#mobileloginBtn').click(function () {
    var n=$('#mobileloginName').val();
    var p=$('#mobileloginPassword').val();
    $.ajax({
        type:'get',
        url:'data/login.php',
        data:{uname:n},
        success: function (data) {
            console.log(data.length);
            if(data.length==0){alert('用户名不存在')}
            else{
                if(data[0][2]==p){
                    sessionStorage['uname']=n;
                    if(isRememberMe.checked){
                        mobileloginName.value=n
                    }else{
                        mobileloginName.value=''
                    }
                    location.href='shop.html';
                }else{
                    alert('用户密码错误')
                }
            }

        },
        err: function (err) {
            console.log(err)
        }
    })
});
var idCode='';
/**生成一个随机数**/
function randomNum(min,max){
    return Math.floor( Math.random()*(max-min)+min);
}
/**生成一个随机色**/
function randomColor(min,max){
    var r = randomNum(min,max);
    var g = randomNum(min,max);
    var b = randomNum(min,max);
    return "rgb("+r+","+g+","+b+")";
}
drawPic();
document.getElementById("changeImg").onclick = function(e){
    e.preventDefault();
    idCode='';
    drawPic();
};

/**绘制验证码图片**/
function drawPic(){
    var canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';

    /**绘制背景色**/
    ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
    ctx.fillRect(0,0,width,height);
    /**绘制文字**/
    var str = 'ABCEFGHJKLMNPQRSTWXYabcdefghijklmnprstuvwxyz123456789';
    for(var i=0; i<4; i++){
        var txt = str[randomNum(0,str.length)];
        idCode+=txt;
        ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
        ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
        var x = 10+i*25;
        var y = randomNum(25,45);
        var deg = randomNum(-45, 45);
        //修改坐标原点和旋转角度
        ctx.translate(x,y);
        ctx.rotate(deg*Math.PI/180);
        ctx.fillText(txt, 0,0);
        //恢复坐标原点和旋转角度
        ctx.rotate(-deg*Math.PI/180);
        ctx.translate(-x,-y);
    }
    /**绘制干扰线**/
    for(var i=0; i<4; i++){
        ctx.strokeStyle = randomColor(40,180);
        ctx.beginPath();
        ctx.moveTo( randomNum(0,width), randomNum(0,height) );
        ctx.lineTo( randomNum(0,width), randomNum(0,height) );
        ctx.stroke();
    }
    /**绘制干扰点**/
    for(var i=0; i<50; i++){
        ctx.fillStyle = randomColor(0,255);
        ctx.beginPath();
        ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
        ctx.fill();
    }
}
$('#mobileverificationCode1').blur(function () {
    //console.log(this.value,`\^${idCode}$\i`)
    //console.log(this.value.match(idCode));
    if(this.value.toUpperCase().match(idCode.toUpperCase())){
        $(this).css("border","1px solid black");
        $('#registerCode-error').html('验证码输入正确').css({color:"green",fontSize:"12px"});
        //return true
    }else{
        $(this).css('border','1px solid red');
        $('#registerCode-error').html('验证码输入错误').css({color:"red",fontSize:"12px"});
        $(this).html('');
        idCode='';
        drawPic();
    }
});