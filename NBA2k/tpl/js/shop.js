/**
 * Created by bjwsl-001 on 2017/5/28.
 */
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
});
$('.third').on('mouseleave','div', function () {
    $(this).children('div').hide()
});
//分页选择事件绑定
$('.byPage').click(function () {
    if($(this).css('overflow')==='hidden')
    $(this).css('overflow','visible');
    else{$(this).css('overflow','hidden');}
}).on('mouseenter','a', function () {
    $(this).css('background','#F6F6F6');
}).on('mouseleave','a', function () {
    $(this).css('background','#fff');
}).on('click','a', function () {
    $('.pageNum').html($(this).html());
    var n=Number($(this).html().substr(2,2));
    commodityInfo(n,0,order);
});
//商品列表初始化
window.onload=commodityInfo(20);
//分页页码点击件
$('#pageNumber').on('click','a', function () {
    $(this).addClass('clicked').siblings().removeClass('clicked');
    var index=$(this).index();
    commodityInfo(Number($('.pageNum').html().substr(2,2)),index,order)
});
var order;
//商品排序点击事件
$('.orderBy').on('click','li', function () {
    $(this).children().css('color','#4FBDEF');
    $(this).siblings().children().css('color','#BAA9BE');
    order=$(this).attr('name');
    commodityInfo(Number($('.pageNum').html().substr(2,2)),0,$(this).attr('name'))
});

