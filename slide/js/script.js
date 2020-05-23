// slideDown
$(document).ready(function(){
    $(".btn").click(function(){
        $(".box1").slideDown(2000);        
    });
});

// slideUp
$(document).ready(function(){
    $(".slideUp").click(function(){
        $(".box2").slideUp(2000);        
    });
});

// slideToggle
$(document).ready(function(){
    $(".slideToggle").click(function(){
        $(".box3").slideToggle(2000);        
    });
});
