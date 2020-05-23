// removecss add css
$(document).ready(function(){
    $(".btn1").click(function(){
        $("#div1").addClass("divcss");        
    });   
});


$(document).ready(function(){
    $(".btn2").click(function(){
        $(".div1").removeClass("div1");        
    });   
});



$(document).ready(function(){
    $(".btn3").click(function(){
        $("#toggle").toggleClass("div3");        
    });   
});



$(document).ready(function(){
    $(".css").click(function(){
        $("#css").css({
            background: "red",
            fontSize: "30px",
            color: "#fff"

        });        
    });   
});