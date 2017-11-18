

	function checkf2(n){
	 $.get("data/floor2.php?f2="+n,data=>{
	   var html1="";
	   var html2="";	   
	   
	   html1=`
		  <dl class="floorc-pic">
			  <dt>
				  <img src="${data[0].imgl}" alt="">
			  </dt>
			  <dd>
				  <a href="">${data[0].headl}</a>
				  <p>${data[0].contl}</p>
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
				  <img src="${data[0].imgr}" alt="">
			  </dt>
			  <dd>
				  <a href="">${data[0].headr}</a>
				  <p>${data[0].contr}</p>
				  <span>
					  <i></i>
					  <i></i>
					  <a href="">查看简章</a>
					  <a href="">在线咨询</a>
					  
				  </span>
			  </dd>
		  </dl>
	  `;
	  $("div.f2").html(html1);
	  for(var i=0;i<data[1].length;i++){
		  title=data[1][i];
	  html2+=`
		  <li>
			 <span class="floor2r1">${title.ftid}</span>
			  <a href=""><span>${title.f2p}</span><\/a>
			  <span>${title.f2num}人报名</span>
		  </li>
	  `;
	  $("ul.f2r").html(html2);
	  }
	 })
	}
	checkf2(1);

	$("ul.floor-2").on("mouseenter","li",function(){
	  var $li=$(this);
	  var n=$li.index()+1;
	  checkf2(n);
	  $li.addClass("over").siblings().removeClass("over");
	})
