// siblings
$(document).ready(function(){
    $("#span").siblings().css({
        "border": "2px solid red"
    })
});

$(document).ready(function(){
    $("#span1").siblings("p").css({
        "border": "2px solid red"
    })
});


$(document).ready(function(){         //method                             
    $("#sp").next().css({             // nextAll, nextUntil, prevAll, prevUntil        
        "border": "2px solid red"     
    })
});
