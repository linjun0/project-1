

$('#menu').mouseover(function(){
    $('#nav-list').css('display','block');
});
$('#nav-list').mouseleave(function(){
    $('#nav-list').css('display','none');
});
//轮播广告
$(document).ready(function(){
    //第一张显示
    $(".pic li").eq(0).show();
    //鼠标滑过手动切换，淡入淡出
    $("#position li").mouseover(function() {
        $(this).addClass('cur').siblings().removeClass("cur");
        var index = $(this).index();
        i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
        // $(".pic li").eq(index).show().siblings().hide();
        $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
    });
    //自动轮播
    var i=0;

    //向右切换
    var play=function(){
        i++;
        i = i > 6 ? 0 : i ;
        $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    var timer=setInterval(play,2000);
    //鼠标移入移出效果
    $("#slider-box").mouseover(function() {
        clearInterval(timer);
    }) ;
    $("#slider-box").mouseout(function(){
        timer=setInterval(play,2000);
    })

})
$(document).ready(function(){
    //第一张显示
    $(".pic1 li").eq(0).show();
    //鼠标滑过手动切换，淡入淡出
    $("#position2 li").mouseover(function() {
        $(this).addClass('cur').siblings().removeClass("cur");
        var index = $(this).index();
        i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
        // $(".pic li").eq(index).show().siblings().hide();
        $(".pic1 li").eq(index).fadeIn(500).siblings().fadeOut(500);
    });
    //自动轮播
    var i=0;

    //向右切换
    var play=function(){
        i++;
        i = i > 3 ? 0 : i ;
        $("#position2 li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic1 li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    var timer=setInterval(play,2000);
    //鼠标移入移出效果
    $("#slider-box").mouseover(function() {
        clearInterval(timer);
    }) ;
    $("#slider-box").mouseout(function(){
        timer=setInterval(play,2000);
    })

})
//官方 合作 切换
$('#tabs a').mouseover(function(){
    $(this).addClass("selected").siblings().removeClass();//removeClass就是删除当前其他类；只有当前对象有addClass("selected")；siblings()意思就是当前对象的同级元素，removeClass就是删除；
    $("#slider-box > ul").hide().eq($('#tabs a').index(this)).show();
});

//选项卡
//window.onload=function(){
//    tab("new_header","li","tab_show","div","","onmouseover")
//    function tab(new_header,new_header_tag,tab_show,tag_show_tag,evt){
//        var new_header=document.getElementById(new_header);
//        var new_header_li=new_header.getElementsByTagName(new_header_tag);
//        var tab_show=document.getElementById(tab_show);
//        var tab_show_li=tab_show.getElementsByTagName(tag_show_tag);
//        var len=new_header_li.length;
//        var i=0;
//        for(i=0;i<len;i++){
//            new_header_li[i].index=i;
//            new_header_li[i][evt]=function(){
//                for(i=0;i<len;i++){
//                    new_header_li[i].className = '';
//                    tab_show_li[i].className = 'composite';
//                }
//                new_header_li[this.index].className = 'current';
//                tab_show_li[this.index].className = '';
//            }
//        }
//    }
//}
$('#new_header li').mouseover(function(){
    $(this).addClass("current").siblings().removeClass();//removeClass就是删除当前其他类；只有当前对象有addClass("selected")；siblings()意思就是当前对象的同级元素，removeClass就是删除；
    $("#tab_show>div").hide().eq($('#new_header li').index(this)).show();
});
//合作商上下滚动
var intervalObj=window.setInterval(next,3000);

function next(){
    $("#scrollMsg li:first-child").animate({
        marginTop:"-76px"
    },1500,function(){
        var temp=$(this).clone();
        $(this).remove();
        temp.css({marginTop:"0"});
        $("#scrollMsg").append(temp);
    });
}

$("#scrollWrap").mouseover(function(){
    window.clearInterval(intervalObj);
});
$("#scrollWrap").mouseout(function(){
    intervalObj=window.setInterval(next,2000);
});

//内容选项卡
$('#tabs1 li').mouseover(function(){
    $(this).addClass("active_t").siblings().removeClass();//removeClass就是删除当前其他类；只有当前对象有addClass("selected")；siblings()意思就是当前对象的同级元素，removeClass就是删除；
    $("#list_jc>div").hide().eq($('#tabs1 li').index(this)).show();
});
$('#tabs2 li').mouseover(function(){
    $(this).addClass("active_t").siblings().removeClass();//removeClass就是删除当前其他类；只有当前对象有addClass("selected")；siblings()意思就是当前对象的同级元素，removeClass就是删除；
    $(".subCon2").hide().eq($('#tabs2 li').index(this)).show();
});
$('#tabs3 li').mouseover(function(){
    $(this).addClass("active_t").siblings().removeClass();//removeClass就是删除当前其他类；只有当前对象有addClass("selected")；siblings()意思就是当前对象的同级元素，removeClass就是删除；
    $(".subCon3").hide().eq($('#tabs3 li').index(this)).show();
});

//版本中心样式

$('.subCon5 .n1 a').mouseover(function(){
    $('.subCon5 .n1 .title').css("background","#ff3c00");
    $('.subCon5 .n1 .title span').css("color","#ff3c00");
    $('.subCon5 .n1 .dot').css("border-color","#ff3c00");
    $('.subCon5 .n1 .dot-inner').css("background","#ff3c00")
});
$('.subCon5 .n1 a').mouseout(function(){
    $('.subCon5 .n1 .title').css("background","#3e3e3e");
    $('.subCon5 .n1 .title span').css("color","#3e3e3e");
    $('.subCon5 .n1 .dot').css("border-color","#3e3e3e");
    $('.subCon5 .n1 .dot-inner').css("background","#3e3e3e")
});
$('.subCon5 .n2 a').mouseover(function(){
    $('.subCon5 .n2 .title').css("background","#ff3c00");
    $('.subCon5 .n2 .title span').css("color","#ff3c00");
    $('.subCon5 .n2 .dot').css("border-color","#ff3c00");
    $('.subCon5 .n2 .dot-inner').css("background","#ff3c00")
});
$('.subCon5 .n2 a').mouseout(function(){
    $('.subCon5 .n2 .title').css("background","#3e3e3e");
    $('.subCon5 .n2 .title span').css("color","#3e3e3e");
    $('.subCon5 .n2 .dot').css("border-color","#3e3e3e");
    $('.subCon5 .n2 .dot-inner').css("background","#3e3e3e")
});
$('.subCon5 .n3 a').mouseover(function(){
    $('.subCon5 .n3 .title').css("background","#ff3c00");
    $('.subCon5 .n3 .title span').css("color","#ff3c00");
    $('.subCon5 .n3 .dot').css("border-color","#ff3c00");
    $('.subCon5 .n3 .dot-inner').css("background","#ff3c00")
});
$('.subCon5 .n3 a').mouseout(function(){
    $('.subCon5 .n3 .title').css("background","#3e3e3e");
    $('.subCon5 .n3 .title span').css("color","#3e3e3e");
    $('.subCon5 .n3 .dot').css("border-color","#3e3e3e");
    $('.subCon5 .n3 .dot-inner').css("background","#3e3e3e")
});
$('.subCon5 .n4 a').mouseover(function(){
    $('.subCon5 .n4 .title').css("background","#ff3c00");
    $('.subCon5 .n4 .title span').css("color","#ff3c00");
    $('.subCon5 .n4 .dot').css("border-color","#ff3c00");
    $('.subCon5 .n4 .dot-inner').css("background","#ff3c00")
});
$('.subCon5 .n4 a').mouseout(function(){
    $('.subCon5 .n4 .title').css("background","#3e3e3e");
    $('.subCon5 .n4 .title span').css("color","#3e3e3e");
    $('.subCon5 .n4 .dot').css("border-color","#3e3e3e");
    $('.subCon5 .n4 .dot-inner').css("background","#3e3e3e")
});

//底部弹出框
$('#medLink').mouseover(function(){
    $('#medLink div').css('display','block');
});
$('#medLink').mouseleave(function(){
    $('#medLink div').css('display','none');
});
//滚动监听
$(function(){
    var _index=0;
    $("#siderbar a").click(function(e){
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        _index=$(this).index()+1;
        //通过拼接字符串获取元素，再取得相对于文档的高度
        var _top=$(".subCon"+_index).offset().top;
        //scrollTop滚动到对应高度
        $("html,body").animate({scrollTop:_top-100},100);
    });
    var nav=$("#siderbar"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){

        if(sc.scrollTop()>=500&&sc.scrollTop()<=1700){
            //获取滚动元素对应的索引!!!重难点
            var index=Math.floor(sc.scrollTop()/500);

            $("#siderbar a").eq(index-1).addClass("active").siblings().removeClass("active");
        }else if(sc.scrollTop()>1800&&sc.scrollTop()<2000){
            $("#siderbar a").eq(3).addClass("active").siblings().removeClass("active");
        }else if(sc.scrollTop()>2000){
            $("#siderbar a").eq(4).addClass("active").siblings().removeClass("active");
        }

    });
});
