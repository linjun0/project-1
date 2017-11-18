(()=>{
	
	function checkf1(n){
    $.get("data/floor1.php?f1="+n,data=>{
    var html="";
	console.log(data);
	
	  html=` 
			  <dl class="floorc-pic">
				  <dt>
					  <img src="${data.imgl}" alt="">
				  </dt>
				  <dd>
					  <a href="">${data.headl}</a>
					  <p>${data.contl}</p>
					  <span>
						  <i></i>
						  <i></i>
						  <a href="">查看简章</a>
						  <a href="">在线咨询</a>
						  
					  </span>
				  </dd>
			  </dl>
			  <dl class="floorc-pic">
				  <dt>
					  <img src="${data.imgr}" alt="">
				  </dt>
				  <dd>
					  <a href="">${data.headr}</a>
					  <p>${data.contr}</p>
					  <span>
						  <i></i>
						  <i></i>  
						  <a href="">查看简章</a>
						  <a href="">在线咨询</a>
						  
					  </span>
				  </dd>
			  </dl>		  
	  `	
    $("div.f1").html(html);
  })
  }
  checkf1(1);

$("ul.floor-1").on("mouseenter","li",function(){
  var $li=$(this);
  var n=$li.index()+1;
  console.log(n);
  checkf1(n); 
   $li.addClass("over").siblings().removeClass("over");  
})
	
})()




//$("ul.floorl_school>li").mouseover()