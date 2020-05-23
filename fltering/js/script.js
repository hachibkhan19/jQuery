// Filtering
/*
$(document).ready(function(){
    $("div").first().css({
        "border": "2px solid red"
    })
});

$(document).ready(function(){
    $("div").last().css({
        "border": "2px solid red"
    })
});


$(document).ready(function(){
    $("p").eq(1).css({
        "border": "2px solid red"
    })
});
*/

$(document).ready(function(){
    $("p").not(".intro").css({                   // filter()
        "border": "2px solid red"
    })
});
