var lis=$("#img").find("li");
var imgs=$("#img").find("img");
var i=0;

var t=setInterval(bnp,4000),onInterval=false;
  
  function bnp(){
	if(i>5){i=0;}
   $("#img img:eq("+i+")").addClass("bannerp").parent().parent().siblings()
	   .children().children().removeClass("bannerp");
   $("#img li:eq("+i+")").addClass("bannerp").siblings()
	   .removeClass("bannerp");
   $(".btn li:eq("+i+")").addClass("on").siblings().removeClass("on");
    i++;
  }
  

console.log($("#l1"));
$(".btn>li").click(function(){
	
   i=$(this).index()
   $("#img img:eq("+i+")").addClass("bannerp").parent().parent().siblings()
	   .children().children().removeClass("bannerp");
   $("#img li:eq("+i+")").addClass("bannerp").siblings()
	   .removeClass("bannerp");
   $(".btn li:eq("+i+")").addClass("on").siblings().removeClass("on");
    i++;
	
})






