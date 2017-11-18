(()=>{
    var $container=$("#contain");
    var $ctrl=$(".ctrl");
    var $img=$(".ctrl img");
    var $vd=$("#vd");
    $container.mouseenter(()=>{
        $ctrl.css("display","block");
    }).mouseleave(()=>{
        $ctrl.css("display","none");
    })
    $ctrl.click(e=>{
        e.preventDefault();  
        
        if($vd[0].paused){
            $vd[0].play();
            $img[0].src="res/play.png"; 

        }else{
            $vd[0].pause();
            $img[0].src="res/pause.png";
        }
    })
})()
