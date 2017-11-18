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
$(".model-div").on('mousemove',function (e) {
   $('.scale-img>img').attr({src:document.getElementById('big-img').src});
    $('.scale-img>img').css({position:'relative',width:"495px",height:"495px",left:e.offsetX<75?"517.5px":e.offsetX>420?"-517.5px":(247.5-e.offsetX)*3.3+"px",top:e.offsetY<75?"517.5px":e.offsetY>420?"-517.5px":(247.5-e.offsetY)*3.3+"px",transform:'scale(3.3,3.3)'});
    $('.scale-img').css({width:"495px",height:"495px",left:'505px',top:'-1px',overflow:'hidden'});
   $('.scale-mirror').css({display:'block',left:e.offsetX<75?"0":e.offsetX>420?"345px":e.offsetX-75+"px",top:e.offsetY<75?"0":e.offsetY>420?"345px":e.offsetY-75+"px"});
})
$('.model-div').on('mouseleave',function (e) {
    $('.scale-img>img').attr({src:document.getElementById('big-img').src});
    $('.scale-img>img').css({width:"0",height:"0",left:'250px',top:'250px',transform:'scale(1,1)'});
    $('.scale-img').css({width:"0",height:"0",left:'250px',top:'250px',overflow:'hidden'});
    $('.scale-mirror').css({display:'none'});
})
//$(".model-div").on('mousewheel',function (e){
//    console.log(e.wheelDelta)
//})
$('.small-img').on('click','li',function () {
    $(this).children('img').css('border','2px solid #00559A');
    $(this).siblings().children('img').css('border','2px solid #D1D3D4')
    console.log(this.childNodes[0].src.substring(0,this.childNodes[0].src.indexOf('_')+1));
    document.getElementById('big-img').src=this.childNodes[0].src.substring(0,this.childNodes[0].src.indexOf('_')+1)+'548X548.jpg';
});
$('.pdp-scroll-y-btnL').on('click', function () {
    console.log($('.small-img').css('top'));
    if($('.small-img').css('top')!='0px'){
        $('.small-img').css('top','0')
    }
});
$('.pdp-scroll-y-btnR').on('click', function () {
    console.log($('.small-img').css('top')=='0px');
    if($('.small-img').css('top')=='0px'){
        $('.small-img').css('top','-106px')
    }
});
$('.plus').click(function () {
    var v=$('.commodity-number').attr('value');
    v++;
    $('.commodity-number').attr('value',v)
});
$('.minus').click(function () {
    var v=$('.commodity-number').attr('value');
    console.log(v);
    if(v>0){
    v--;
    $('.commodity-number').attr('value',v)
    }
});
