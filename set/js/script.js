// chaining
$(document).ready(function(){
    $(".btn").click(function(){
        $("p").text("Hi, How are you?");
    });   
});


$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").html('<h1>Hi, How are you?</h1>');
    });   
});


$(document).ready(function(){
    $(".btn2").click(function(){
        $("input").val("Enter your name");
    });   
});

$(document).ready(function(){
    $(".btn3").click(function(){
        $("a").attr("href", "https://www.w3school.com");
    });   
});