// click event
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

//dblclick
$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    });
});

//mouseenter
$(document).ready(function(){
    $("p").mouseenter(function(){
        $(this).hide();
    });
});

//mouseleave
$(document).ready(function(){
    $("p").mouseleave(function(){
        alert("leave")
    });
});

//hover
$(document).ready(function(){
    $("p").hover(function(){
        alert("hi");
    },
    function(){
        alert("Bye");
    });
});


// focus event
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background", "#ccc");
    });
});

// on
$(document).ready(function(){
    $("p").on({
        mouseenter:function(){
            $(this).css("background-color", "red")
        },
        mouseleave:function(){
            $(this).css("background-color", "green")
        },
        click:function(){
            $(this).css("background-color", "#ccc")
        }
    });
});
