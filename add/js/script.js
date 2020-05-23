// add
$(document).ready(function(){
    $(".btn").click(function(){
        $("p").append("<b>Hi, How are you</b>?");
        $("p").prepend("<b>Hi, How are you</b>?");
    });   
});


$(document).ready(function(){
    $(".btn1").click(function(){
        $("h3").before("<span>Hi, How are you</span>?");
        $("h3").after("<span>Hi, How are you</span>?");
    });   
});