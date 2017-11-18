$.ready(getTeamInfo(1,1,'get','data/teamInfo.php'));
document.querySelector('.NBASTORE').onmouseenter= function () {
    document.querySelector('#store-list').style.height='280px';
    document.querySelector('.NBASTORE span').className="arrow-up"
};
document.querySelector('.NBASTORE').onmouseleave= function () {
    document.querySelector('#store-list').style.height='0';
    document.querySelector('.NBASTORE span').className="arrow-down"
};
//    左侧导航栏事件绑定
var lists=document.querySelectorAll('#nav-list>li');
for(var i=4;i<lists.length;i++){
    lists[i].onmouseenter= function () {
        var url_show=$(this).children()[1];
        $(url_show).show();
    };
    lists[i].onmouseleave= function () {
        var ul_hide=$(this).children()[1];
        $(ul_hide).hide();
    }
};
//   用户登录事件绑定
$('.user-button').on('mouseenter', function () {
    $('.user-info').show()
});
$('.user-button').on('mouseleave', function () {
    $('.user-info').hide()
});
//    用户搜索绑定事件
$('.search-button').on('click', function () {
    $(this).css('display','none');
    $(".search-info").css('z-index','30');
    $('.search-info').css('opacity','1')
});
//      页头2用户登录事件绑定
$('.user-button2').on('mouseenter', function () {
    $('.user-info2').show()
});
$('.user-button2').on('mouseleave', function () {
    $('.user-info2').hide()
});
//    季后赛固定图标事件绑定
$('.close').click(function () {
    $('.playOff').hide()
});
//    第二页头事件绑定
$(window).scroll(function () {
        if($(window).scrollTop()>80){
            $('.header2').css('display','block')
        }else{
            $('.header2').css('display','none')
        }
    }
);
//    第二导航栏事件绑定
var lists2=document.querySelectorAll('#nav-list2>li');
for(var i=5;i<lists2.length;i++){
    lists2[i].onmouseenter= function () {
        var url_show=$(this).children()[1];
        $(url_show).show();
    };
    lists2[i].onmouseleave= function () {
        var ul_hide=$(this).children()[1];
        $(ul_hide).hide();
    }
};
$('.nav_details>ul>li>ol').on('mouseenter', function () {
    $('.model').css('display','block')
});
$('.nav_details>ul>li>ol').on('mouseleave', function () {
    $('.model').css('display','none')
});
//轮播广告事件绑定
$('.animate').mouseenter(function () {
    $('.prev').css('display','block');
    $('.next').css('display','block')
});
$('.animate').mouseleave(function () {
    $('.prev').css('display','none');
    $('.next').css('display','none')
});
timer(1);
var points=document.querySelectorAll('#ad_points a');
$('#ad_points').on('mouseover','a', function () {
    $(this).addClass('current').siblings().removeClass('current');
    for(var i=0;i<points.length;i++){
        if(points[i].className==="current")
            var m=i;
    }
    $('#ad').css('left',`${m*(-510)}px`);
    clearInterval(t);
    timer(m+1)
});
$('.prev').on('click', function (e) {
    e.preventDefault();
    clearInterval(t);
    var n;
    for(var i=0;i<points.length;i++){
        if(points[i].className==="current"){
        if(i>0) n=i-1;
        else n=i;
        };
    };
    $(points[n]).addClass('current').siblings().removeClass('current');
    $('#ad').css('left',`${n*(-510)}px`);
    timer(n+1)
});
$('.next').on('click', function (e) {
    e.preventDefault();
    var n;
    for(var i=0;i<points.length;i++){
        if(points[i].className==="current"){
            if(i<4) n=i+1;
            else n=i;
        };
    };
    $(points[n]).addClass('current').siblings().removeClass('current');
    $('#ad').css('left',`${n*(-510)}px`);
    clearInterval(t);
    timer(n)
});
//最新资讯图片事件绑定
$('.news-tab-list-firstLi a').on('mouseenter','img', function () {
    $(this).css('transform','scale(1.1,1.1)');
});
$('.news-tab-list-firstLi a').on('mouseleave','img', function () {
    $(this).css('transform','scale(1,1)');
});
$('#lis').on('mouseenter','li', function () {
    $(this).children("dt").children().children().css('transform','scale(1.1,1.1)')
});
$('#lis').on('mouseleave','li', function () {
    $(this).children("dt").children().children().css('transform','scale(1,1)')
});
$('.moreNews').on('mouseenter', function () {
    $('.moreNews a').css('color','white').siblings().attr('src','img/icon_16_arrow_right_white_1c5432.png')
});
$('.moreNews').on('mouseleave', function () {
    $('.moreNews a').css('color','#2464B5').siblings().attr('src','img/icon_16_arrow_right_blue_1f8b71.png')
});
//球队排名Ajax请求
$("#team-rank tbody tr:nth-child(2n+1)").addClass('gray');
$('#btns').on('click','button',function () {
    $(this).addClass('clicked').siblings().removeClass('clicked');
    var lm,ew;
    if($('[class="clicked"]').html()===$('#lm-rank').html()){
        lm=1;
    }
    if($('[class="span active"]').html()===$('#east').html()){
        ew=1;
    }
    if($('[class="clicked"]').html()!==$('#lm-rank').html()){
        lm=0;
    }
    if($('[class="span active"]').html()!==$('#east').html()){
        ew=0;
    }
    getTeamInfo(lm,ew,'get','data/teamInfo.php');
});
$('#links').on('click','a',function () {
    $(this).children('span').addClass('active');
    $(this).siblings().children('span').removeClass('active');
    var lm,ew;
    if($('[class="clicked"]').html()===$('#lm-rank').html()){
        lm=1;
    }
    if($('[class="span active"]').html()===$('#east').html()){
        ew=1;
    }
    if($('[class="clicked"]').html()!==$('#lm-rank').html()){
        lm=0;
    }
    if($('[class="span active"]').html()!==$('#east').html()){
        ew=0;
    }
    getTeamInfo(lm,ew,'get','data/teamInfo.php');
});

//视屏列表事件绑定
$('.video-details>p').on('mouseenter','a', function () {
    $(this).children('img').css('transform','scale(1.1,1.1)');
    $(this).children('span').css('color','#2464B5');
});
$('.video-details>p').on('mouseleave','a', function () {
    $(this).children('img').css('transform','scale(1,1)');
    $(this).children('span').css('color','black');
});
$('.video-details>.next2').on('click', function () {
    $('.video-details>p').css('left','-1185px');
    $(this).css('display','none');
    $('.video-details>.prev2').css('display','block')
});
$('.video-details>.prev2').on('click', function () {
    $('.video-details>p').css('left','0px');
    $(this).css('display','none');
    $('.video-details>.next2').css('display','block')
});
var lis=document.querySelectorAll('.video-nav>ul li');
var divs=document.querySelectorAll('#videos>.video-details');
$('.video-nav>ul').on('click','li', function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    for(var i=0;i<lis.length;i++){
        if(lis[i].className=='left selected'){
           $(divs[i]).removeClass('none').addClass('block').siblings('.video-details').removeClass('block').addClass('none');
            $(divs[i]).children('p').css("left",'0');
            $('.prev2').css('display','none');
            $('.next2').css('display','block');
        }
    }
});
//二维码事件绑定
$('#social-media-list').on('mouseenter','li', function () {
    $(this).children('img').css({height:"136px",top:"-175%"});
});
$('#social-media-list').on('mouseleave','li', function () {
    $(this).children('img').css({height:"78px",top:"0"});
});