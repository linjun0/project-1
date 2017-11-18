
var $con=$(".banner-con");
var $conSon=$(".banner-con>div");
var $class=$(".banner-class");
var $btns=$(".my-btn>li");
var CONWIDTH=$con.css("width");
var TRANS=800;
var INTERVAL=3800;

var $left=$(".my-banner>img[src*=left]");
var $right=$(".my-banner>img[src*=right]");

$conSon.css("width",parseFloat(CONWIDTH)*$conSon.children().length+'px');
$class.css("width",CONWIDTH);
console.log($conSon.children().length-1);
var n=0; 

console.log($btns[0]);
function functime(){
  n++;
  if(n>$conSon.children().length-2){ 
       $conSon.css("left",'-'+parseFloat(CONWIDTH)*n+'px');    
       $($btns[0]).addClass("active").siblings().removeClass("active");
       console.log(parseFloat(CONWIDTH)*n,n);
       
       setTimeout(()=>{
         $conSon.css("transition","all 0s linear");
         n=0; 
         $conSon.css("left",0+'px');  
          
         setTimeout(()=>{
           $conSon.css("transition","all ."+TRANS/100+"s linear");
         },50) 
       },TRANS) 
     } else{                   
        $conSon.css("left",'-'+parseFloat(CONWIDTH)*n+'px');
        console.log(n);              
        $($btns[n]).addClass("active").siblings().removeClass("active"); 
        console.log(parseFloat(CONWIDTH)*n,n);         
     } 
}
var time=setInterval(functime,INTERVAL);

$class.mouseenter(function(){
   clearInterval(time);
   time=null;
}).mouseleave(function(){
  time=setInterval(functime,INTERVAL);
})
$right.on("click",$conSon,function(e){
  n++
  e.preventDefault();
  clearInterval(time);
   time=null;
  
  if(n<$conSon.children().length-1){
      
    $conSon.css("left",'-'+parseFloat(CONWIDTH)*n+'px');
    $($btns[n]).addClass("active").siblings().removeClass("active");
   
  }else{        
    $conSon.css("left",'-'+parseFloat(CONWIDTH)*n+'px');
    $($btns[0]).addClass("active").siblings().removeClass("active");
    
    n=0;
    setTimeout(()=>{
      $conSon.css("transition","all 0s linear");
      $conSon.css("left",0+'px');
      
      setTimeout(()=>{
        $conSon.css("transition","all ."+TRANS/100+"s linear");
        if(time==null){
          time = setInterval(functime,TRANS);
        }
    },100)
      
    },TRANS)    
  }
})

$left.on("click",$conSon,function(e){
  e.preventDefault();
  clearInterval(time);
  time=null;
  if(n==0){ 
      $conSon.css("transition","all 0s linear");
      $conSon.css("left","-"+parseFloat(CONWIDTH)*($conSon.children().length-1)+'px');
      n=$conSon.children().length-1;     
        
      setTimeout(()=>{
            $conSon.css("transition","all ."+TRANS/100+"s linear"); 
            n--;
            $conSon.css("left","-"+parseFloat(CONWIDTH)*n+"px");
            $($btns[n]).addClass("active").siblings().removeClass("active");
            if(time==null){
              time=setInterval(time);
            }
            
        },50);
  }else{
    console.log(n);
    n--;
    $conSon.css("left","-"+parseFloat(CONWIDTH)*n+"px");
    $($btns[n]).addClass("active").siblings().removeClass("active");
  }
  setInterval(time);  
})



