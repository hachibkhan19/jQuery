// chaining
$(document).ready(function(){
    $("button").click(function(){
        $("p").css("background", "green")
              .slideUp(2000)
              .slideDown(2000)
              .hide(2000);
    });   
});

