$ctrl=$(".ctrl");
$container=$(".container");
$vd=$("#vd");
$img=$(".ctrl>img");
$container.mouseenter(function(){
    $ctrl.css("display","block")
}).mouseleave(function(){
    $ctrl.css("display","none")
});
$ctrl.on("click","img",function(e){
    e.preventDefault();
    if($vd.paused){
        $vd.play();
        $img.src="src/play.png"
    }else{
        $vd.pause();
        $img.src="src/play.png"
    }
})