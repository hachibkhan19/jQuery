// Ancestors
$(document).ready(function(){
    $("span").parent().css({
        "border": "2px solid red"
    })
});


$(document).ready(function(){
    $(".span").parents("div").css({
        "border": "2px solid red"
    })
});


$(document).ready(function(){
    $("#span").parentsUntil("div").css({
        "border": "2px solid red"
    })
});