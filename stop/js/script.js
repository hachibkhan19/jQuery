// slideDown
$(document).ready(function(){
    $(".btn").click(function(){
        $(".box1").slideDown(3000);        
    });
    $("button").click(function(){
        $(".box1").stop();        
    })
});

