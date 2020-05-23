// chaining
$(document).ready(function(){
    $(".btn").click(function(){
        alert("Text :"+ $("p").text());
    });   
});


$(document).ready(function(){
    $(".btn1").click(function(){
        alert("Text :"+ $("p").html());
    });   
});


$(document).ready(function(){
    $(".btn2").click(function(){
        alert("Text :"+ $("input").val());
    });   
});

$(document).ready(function(){
    $(".btn3").click(function(){
        alert("Attr :"+ $("a").attr("href"));
    });   
});