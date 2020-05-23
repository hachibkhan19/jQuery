// hide method
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

// show method
$(document).ready(function(){
    $(".btn").click(function(){
        $("p").show();
    });
});

// * use
$(document).ready(function(){
    $("#btn").click(function(){
        $("*").hide();
    });
});

// this method & : method
$(document).ready(function(){
    $("#self").click(function(){
        $(":button").hide();  // this
    });
});

// First and last
$(document).ready(function(){
    $("#f").click(function(){
        $("h5:first").hide();
    });
});
$(document).ready(function(){
    $("#l").click(function(){
        $("h5:last").hide();
    });
});
// list
$(document).ready(function(){
    $(".list").click(function(){
        $('ul li:last-child').hide();  //$('ul li:last-child').hide(); //$('ul li:nth-child(2)').hide();
    });
});
// href
$(document).ready(function(){
    $(".link").click(function(){
        $("[href]").hide();
    });
});

// _blank
$(document).ready(function(){
    $("#blank").click(function(){
        $("a[target=_blank]").hide();
    });
});

