// animate
/*
$(document).ready(function(){
    $(".animate").click(function(){
        $("div").animate({
            left: "300px",
            width: "300px",
            height: "300px"
        });        
    });
});
*/
/*
$(document).ready(function(){
    $(".animate").click(function(){
        $("div").animate({            
            height: "toggle"
        });        
    });
});
*/

$(document).ready(function(){
    $(".animate").click(function(){
        var anim = $("div")
        anim.animate({
            width: "300px",
            height: "300px",
            opacity: "0.6",        
        });
        anim.animate({
            width: "100px",
            height: "100px",
            opacity: "1"
        });
        anim.animate({
            fontSize: "40px"
        })
        
    });
});
