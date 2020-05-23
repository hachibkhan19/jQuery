// fadeIn
$(document).ready(function(){
    $("button").click(function(){
        $(".box1").fadeIn(2000);
        $(".box2").fadeIn('slow');
        $(".box3").fadeIn('fast');
    });
});

// fadeOut
$(document).ready(function(){
    $(".fadeOut").click(function(){
        $(".box4").fadeOut(2000);
        $(".box5").fadeOut('slow');
        $(".box6").fadeOut('fast');
    });
});

// fadeToggle
$(document).ready(function(){
    $(".fadeToggle").click(function(){
        $(".box7").fadeToggle(2000);
        $(".box8").fadeToggle('slow');
        $(".box9").fadeToggle('fast');
    });
});

// fadeTo
$(document).ready(function(){
    $(".fadeTo").click(function(){
        $(".box10").fadeTo(2000, 0.4);
        $(".box11").fadeTo('slow', 0.6);
        $(".box12").fadeTo('fast', 0.7);
    });
});
