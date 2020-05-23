// Descendants
$(document).ready(function(){
    $(".children").find("span").css({
        "border": "2px solid red"
    })
});

$(document).ready(function(){
    $(".children1").children().css({
        "border": "2px solid red"
    })
});