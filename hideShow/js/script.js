// hide method
$(document).ready(function(){
    $(".hide").click(function(){
        $("p").hide(2000);
    });
});

// show method
$(document).ready(function(){
    $(".show").click(function(){
        $("p").show(2000);
    });
});

$(document).ready(function(){
    $(".toggle").click(function(){
        $("p").toggle('slow');
    });
});
